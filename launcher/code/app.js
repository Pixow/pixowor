"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeApplication = void 0;
var url = require("url");
var path = require("path");
var fs = require("fs");
var Server = require("electron-rpc/server");
var window_1 = require("./window");
var CodeApplication = /** @class */ (function () {
    function CodeApplication() {
        this.registListeners();
    }
    CodeApplication.prototype.registListeners = function () { };
    CodeApplication.prototype.initRpcServer = function (window) {
        var app = new Server();
        app.configure(window.webContents);
        app.on("load-game", function (req, next) {
            var gameId = req.gameId;
            fs.readFile(path.join(app.getPath("userData"), gameId), function (err, data) {
                if (err)
                    return next(err);
                next(null, data);
            });
        });
    };
    CodeApplication.prototype.startup = function () {
        var args = process.argv.slice(1), serve = args.some(function (val) { return val === "--serve"; });
        var workbenchEntry;
        if (serve) {
            workbenchEntry = "http://localhost:4200";
        }
        else {
            // TODO: change this entry
            workbenchEntry = url.format({
                pathname: path.join(__dirname, "../../editor/index.html"),
                protocol: "file:",
                slashes: true,
            });
        }
        var codeWin = new window_1.CodeWindow({
            entry: workbenchEntry,
            frame: true,
            resizable: false,
            menu: false,
        });
        this.initRpcServer(codeWin);
        if (serve) {
            codeWin.win.webContents.openDevTools();
        }
    };
    return CodeApplication;
}());
exports.CodeApplication = CodeApplication;
