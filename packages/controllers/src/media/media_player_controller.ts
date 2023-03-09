import { BaseController } from "@stimulus-library/utilities";

export class MediaPlayerController extends BaseController {

  static targets = ["media"];

  declare readonly mediaTarget: HTMLMediaElement;

  async play(event?: Event) {
    event?.preventDefault();
    await this.mediaTarget.play();
  }

  pause(event?: Event) {
    event?.preventDefault();
    this.mediaTarget.pause();
  }

  restart(event?: Event) {
    event?.preventDefault();
    this.mediaTarget.currentTime = 0;
  }

  seek(event?: Event) {
    event?.preventDefault();
    this.mediaTarget.currentTime += 5;
  }
}
