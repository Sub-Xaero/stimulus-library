import { Controller } from "@hotwired/stimulus";
import { reactive } from "@stimulus-library/utilities";
import { useMixin } from "./use_mixin";

export interface GeolocationOptions extends Partial<PositionOptions> {
}

export interface GeolocationData {
  locatedAt: number | null,
  error: GeolocationPositionError | null,
  coords: {
    accuracy: number,
    latitude: number,
    longitude: number,
    altitude: number | null,
    altitudeAccuracy: number | null,
    heading: number | null,
    speed: number | null,
  },
  teardown: () => void,
}

export function useGeolocation(controller: Controller, options: GeolocationOptions = {}, update?: (...args: any[]) => void, error?: (...args: any[]) => void) {
  // Ensure passed functions are bound to the correct controller scope
  if (update) {
    update = update.bind(controller);
  }
  if (error) {
    error = error.bind(controller);
  }

  // Default options to pass to the navigator.geolocation.watchPosition() method
  const {
    enableHighAccuracy = true,
    maximumAge = 30000,
    timeout = 27000,
  } = options;

  const isSupported = navigator && "geolocation" in navigator;

  // Create a reactive object to store the geolocation data
  const values = reactive({
    locatedAt: null,
    error: null,
    coords: {
      accuracy: 0,
      latitude: Infinity,
      longitude: Infinity,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      speed: null,
    },
    teardown: () => {
      if (watcher) {
        navigator.geolocation.clearWatch(watcher);
        watcher = null;
      }
    },
  } as GeolocationData);

  const setup = () => {
    if (isSupported) {
      watcher = navigator.geolocation.watchPosition(
        (position: GeolocationPosition) => {
          // Update reactive values
          values.locatedAt = position.timestamp;
          values.coords = position.coords;
          values.error = null;
          // Fire user callback if provided
          if (update) {
            update(position);
          }
        },
        (err: GeolocationPositionError) => {
          // Update reactive values
          values.error = err;
          // Fire user callback if provided
          if (error) {
            error(err);
          }
        },
        {
          enableHighAccuracy,
          maximumAge,
          timeout,
        },
      );
    }
  };

  let watcher: number | null = null;

  useMixin(controller, setup, values.teardown);

  return values;
}

