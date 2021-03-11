import { BaseController } from "./base_controller";
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
    get src(): string;
    get srcSet(): string;
    get sizes(): string;
    get modalClassName(): string;
    get imageClassName(): string;
    initialize(): void;
    connect(): void;
    open(): void;
    close(): void;
}
//# sourceMappingURL=lightbox_image_controller.d.ts.map