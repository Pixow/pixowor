/// <reference types="node" />
import { ipcRenderer, webFrame, remote } from "electron";
import * as childProcess from "child_process";
import * as fs from "fs";
export declare class ElectronService {
    ipcRenderer: typeof ipcRenderer;
    webFrame: typeof webFrame;
    remote: typeof remote;
    childProcess: typeof childProcess;
    fs: typeof fs;
    get isElectron(): boolean;
    constructor();
    get appPath(): string;
    get appDataPath(): string;
    readAppFile(uri: string, cb: Function): void;
    readAppDataFile(uri: string, cb: Function): void;
    readFile(filePath: string, cb: Function): void;
    readJson(filePath: string, cb: Function): void;
    writeFile(content: string, cb: Function): void;
    writeJson({ filePath, content }: {
        filePath: string;
        content: any;
    }, cb: Function): void;
    zipFiles({ files, folderName }: {
        files: string[];
        folderName: string;
    }, cb: Function): void;
    unzipFile({ source, dest }: {
        source: string;
        dest: string;
    }, cb: Function): void;
    uploadFile({ uri, key, qiniuToken }: {
        uri: string;
        key: string;
        qiniuToken: string;
    }, cb: Function): void;
    downloadFile({ uri, output }: {
        uri: string;
        output: string;
    }, cb: Function): void;
}
