import {Controller} from "stimulus";

export function useFullscreen(controller: Controller, el?: Element): {
  isFullscreen: () => boolean
  enter: () => Promise<void>
  exit: () => Promise<void>
  toggle: () => Promise<void>
} {
  // keep a copy of the lifecycle functions of the controller
  const controllerDisconnect = controller.disconnect.bind(controller);

  let element = el || document.documentElement;
  let fullscreenOpen = document.fullscreenElement !== null;

  function updateFullscreenState() {
    fullscreenOpen = document.fullscreenElement !== null;
  }

  function isFullscreen(): boolean {
    return fullscreenOpen;
  }

  async function exit() {
    if (document.exitFullscreen) {
      fullscreenOpen = false;
      await document.exitFullscreen();
    }
  }

  async function enter() {
    if (fullscreenOpen) {
      await exit();
    }
    if (element.requestFullscreen) {
      await element.requestFullscreen();
      fullscreenOpen = true;
    }
  }

  async function toggle() {
    if (fullscreenOpen) {
      await exit();
    } else {
      await enter();
    }
  }

  document.addEventListener('fullscreenchange', updateFullscreenState);

  Object.assign(controller, {
    disconnect() {
      document.removeEventListener('fullscreenchange', updateFullscreenState);
      controllerDisconnect();
    },
  });

  return {
    isFullscreen,
    enter,
    exit,
    toggle,
  };
}