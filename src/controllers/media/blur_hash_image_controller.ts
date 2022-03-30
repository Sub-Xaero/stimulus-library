import {BaseController} from "../../utilities/base_controller";
import {useIntersection} from "../../mixins/use_intersection";
import {decode} from "blurhash";

export class BlurHashImageController extends BaseController {

  static values = {
    hash: String,
    src: String,
    width: Number,
    height: Number,
  };

  declare hashValue: string;
  declare readonly hasHashValue: boolean;
  declare srcValue: string;
  declare readonly hasSrcValue: boolean;
  declare widthValue: number;
  declare readonly hasWidthValue: boolean;
  declare heightValue: number;
  declare readonly hasHeightValue: boolean;


  get hash() {
    if (this.hasHashValue) {
      return this.hashValue;
    } else {
      throw new Error(`${this.identifier}: hashValue is not set`);
    }
  }

  get src() {
    if (this.hasSrcValue) {
      return this.srcValue;
    } else {
      throw new Error(`${this.identifier}: srcValue is not set`);
    }
  }

  get width() {
    if (this.hasWidthValue) {
      return this.widthValue;
    } else {
      throw new Error(`${this.identifier}: widthValue is not set`);
    }
  }

  get height() {
    if (this.hasHeightValue) {
      return this.heightValue;
    } else {
      throw new Error(`${this.identifier}: heightValue is not set`);
    }
  }

  connect() {
    this.showBlurHashPreview();
    useIntersection(this, this.el, this.appear);
  }

  showBlurHashPreview() {
    let element = this.el as HTMLImageElement;
    const pixels = decode(this.hash, this.width, this.height);

    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext("2d");
    const imageData = ctx!.createImageData(this.width, this.height);
    imageData.data.set(pixels);
    ctx!.putImageData(imageData, 0, 0);

    element.src = canvas.toDataURL("image/png");
  }

  appear() {
    console.log("appear");
    let element = this.el as HTMLImageElement;
    element.src = this.src;
  }

}