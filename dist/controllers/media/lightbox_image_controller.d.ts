import { BaseController } from "../../utilities/base_controller";
export declare class LightboxImageController extends BaseController {
    static values: {
        src: StringConstructor;
        srcSet: StringConstructor;
        sizes: StringConstructor;
    };
    static classes: string[];
    readonly hasModalClass: boolean;
    readonly modalClass: string;
    readonly hasImageClass: boolean;
    readonly imageClass: string;
    readonly hasSrcValue: boolean;
    readonly srcValue: string;
    readonly hasSrcSetValue: boolean;
    readonly srcSetValue: string;
    readonly hasSizesValue: boolean;
    readonly sizesValue: string;
    _dialog: HTMLDialogElement | null;
    get _src(): string;
    get _srcSet(): string;
    get _sizes(): string;
    get _modalClassName(): string;
    get _imageClassName(): string;
    initialize(): void;
    connect(): void;
    open(): void;
    close(): void;
}
//# sourceMappingURL=lightbox_image_controller.d.ts.map