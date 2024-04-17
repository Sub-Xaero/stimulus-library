import { BaseController, GeolocationData, useGeolocation } from "stimulus-library";

export class GeolocationController extends BaseController {

  declare _geolocation: GeolocationData;

  connect() {
    this._geolocation = useGeolocation(this, {enableHighAccuracy: true}, this.update, this.error);
  }

  update(position: GeolocationPosition) {
    this.element.innerHTML = `Located at: ${position.coords.latitude} ${position.coords.longitude}`;
  }

  error(error: GeolocationPositionError) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.element.innerHTML = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        this.element.innerHTML = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        this.element.innerHTML = "The request to get user location timed out.";
        break;
      default:
        this.element.innerHTML = "An unknown error occurred.";
        break;
    }
  }

}
