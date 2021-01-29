import { BrowserWindow } from "electron";
import { Disposable, IDisposable } from "../base/common/lifecycle";
export interface ICodeWindow extends IDisposable {
}
export interface IWindowCreationOptions {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    entry: string;
    frame?: boolean;
    resizable?: boolean;
    menu?: boolean;
}
export declare class CodeWindow extends Disposable implements ICodeWindow {
    constructor(config: IWindowCreationOptions);
    private _win;
    get win(): BrowserWindow;
}
