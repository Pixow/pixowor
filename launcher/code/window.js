"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeWindow = void 0;
var electron_1 = require("electron");
var lifecycle_1 = require("../base/common/lifecycle");
var CodeWindow = /** @class */ (function (_super) {
    __extends(CodeWindow, _super);
    function CodeWindow(config) {
        var _this = _super.call(this) || this;
        var electronScreen = electron_1.screen;
        var size = electronScreen.getPrimaryDisplay().workAreaSize;
        var options = {
            width: config.width || size.width,
            height: config.height || size.height,
            webPreferences: {
                nodeIntegration: true,
                allowRunningInsecureContent: false,
                contextIsolation: false,
                enableRemoteModule: true,
            },
        };
        if (config.hasOwnProperty("x"))
            options.x = config.x;
        if (config.hasOwnProperty("y"))
            options.y = config.y;
        if (config.hasOwnProperty("frame"))
            options.frame = config.frame;
        if (config.hasOwnProperty("resizable"))
            options.resizable = config.resizable;
        _this._win = new electron_1.BrowserWindow(options);
        if (config.hasOwnProperty("menu") && !config.menu) {
            _this._win.setMenu(null);
        }
        _this._win.loadURL(config.entry);
        return _this;
    }
    Object.defineProperty(CodeWindow.prototype, "win", {
        get: function () {
            return this._win;
        },
        enumerable: false,
        configurable: true
    });
    return CodeWindow;
}(lifecycle_1.Disposable));
exports.CodeWindow = CodeWindow;
