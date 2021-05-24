System.register(['qing-workbench', '@angular/common', '@angular/core', '@angular/forms', 'primeng/accordion', 'primeng/menu', 'primeng/tree', '@PixelPai/game-core', 'net-socket-packet', 'pixelpai_proto'], function (exports) {
    'use strict';
    var ContextService, WORKBENCH_PUZZLE_BLOCK, CommonModule, ViewChild, Component, Inject, ElementRef, NgModule, FormsModule, ReactiveFormsModule, AccordionModule, MenuModule, TreeModule, EditorLauncher, EditorCanvasType, PBpacket, op_client;
    return {
        setters: [function (module) {
            ContextService = module.ContextService;
            WORKBENCH_PUZZLE_BLOCK = module.WORKBENCH_PUZZLE_BLOCK;
        }, function (module) {
            CommonModule = module.CommonModule;
        }, function (module) {
            ViewChild = module.ViewChild;
            Component = module.Component;
            Inject = module.Inject;
            ElementRef = module.ElementRef;
            NgModule = module.NgModule;
        }, function (module) {
            FormsModule = module.FormsModule;
            ReactiveFormsModule = module.ReactiveFormsModule;
        }, function (module) {
            AccordionModule = module.AccordionModule;
        }, function (module) {
            MenuModule = module.MenuModule;
        }, function (module) {
            TreeModule = module.TreeModule;
        }, function (module) {
            EditorLauncher = module.EditorLauncher;
            EditorCanvasType = module.EditorCanvasType;
        }, function (module) {
            PBpacket = module.PBpacket;
        }, function (module) {
            op_client = module.op_client;
        }],
        execute: function () {

            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */

            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }

            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); }
            }

            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
            }

            var SceneEditorComponent = exports('SceneEditorComponent', /** @class */ (function () {
                function SceneEditorComponent(context) {
                    this.context = context;
                }
                SceneEditorComponent.prototype.ngOnInit = function () {
                    console.log("scene editor init");
                    this.context.initial();
                };
                SceneEditorComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.context.editedSceneConfig$.subscribe(function (sceneConfig) {
                        if (sceneConfig) {
                            _this._scene = sceneConfig.sceneNode;
                            _this.start();
                        }
                    });
                };
                SceneEditorComponent.prototype.start = function () {
                    var _this = this;
                    if (this._app) {
                        this._app.destroy();
                    }
                    var game = this.context.editedGame;
                    var gameConfig = this.context.editedGameConfig;
                    console.log("🚀 ~ file: scene-editor.component.ts ~ line 64 ~ SceneEditorComponent ~ start ~ gameConfig", gameConfig);
                    var _a = this.sceneEditor.nativeElement, offsetWidth = _a.offsetWidth, offsetHeight = _a.offsetHeight;
                    var _b = this.context.getGameServerConfig(), TEST_GAME_CONFIG_IP_MOBILE = _b.TEST_GAME_CONFIG_IP_MOBILE, TEST_GAME_CONFIG_PORT_MOBILE = _b.TEST_GAME_CONFIG_PORT_MOBILE, API_URL = _b.API_URL, WEB_RESOURCE_URI = _b.WEB_RESOURCE_URI;
                    this._app = EditorLauncher.CreateCanvas(EditorCanvasType.Scene, {
                        width: offsetWidth,
                        height: offsetHeight,
                        connection: this.context.socket,
                        game_id: game._id,
                        isEditor: true,
                        runtime: "editor",
                        api_root: API_URL,
                        osd: WEB_RESOURCE_URI,
                        parent: "scene",
                        server_addr: {
                            host: TEST_GAME_CONFIG_IP_MOBILE,
                            port: TEST_GAME_CONFIG_PORT_MOBILE,
                            secure: true,
                        },
                        game_created: function () {
                            _this._app.setGameConfig(gameConfig.capsule);
                            var packet = new PBpacket(op_client.OPCODE._OP_EDITOR_REQ_CLIENT_CHANGE_TO_EDITOR_MODE);
                            var _a = _this._scene.size, rows = _a.rows, cols = _a.cols, tileWidth = _a.tileWidth, tileHeight = _a.tileHeight;
                            packet.content.scene = {
                                id: _this._scene.id,
                                rows: rows,
                                cols: cols,
                                tileWidth: tileWidth,
                                tileHeight: tileHeight,
                            };
                            _this.context.socket.onData(packet);
                        },
                    });
                };
                __decorate([
                    ViewChild("sceneEditor"),
                    __metadata("design:type", ElementRef)
                ], SceneEditorComponent.prototype, "sceneEditor", void 0);
                SceneEditorComponent = __decorate([
                    Component({
                        selector: "scene-editor",
                        template: "<div id=\"scene\" #sceneEditor></div>",
                        styles: ["h1{color:#fff}#scene{width:100%;height:100%}"],
                    }),
                    __param(0, Inject(ContextService)),
                    __metadata("design:paramtypes", [ContextService])
                ], SceneEditorComponent);
                return SceneEditorComponent;
            }()));

            var SceneEditorPluginModule = exports('SceneEditorPluginModule', /** @class */ (function () {
                function SceneEditorPluginModule() {
                }
                SceneEditorPluginModule = __decorate([
                    NgModule({
                        declarations: [SceneEditorComponent],
                        imports: [
                            CommonModule,
                            FormsModule,
                            ReactiveFormsModule,
                            AccordionModule,
                            MenuModule,
                            TreeModule,
                        ],
                        exports: [SceneEditorComponent],
                        entryComponents: [SceneEditorComponent],
                        providers: [
                            {
                                provide: "SceneEditorComponent",
                                useValue: SceneEditorComponent,
                            },
                        ],
                    })
                ], SceneEditorPluginModule);
                return SceneEditorPluginModule;
            }()));

            var config = exports('config', {
                name: "scene-editor-plugin",
                id: "sceneEditor",
                entryComponent: "SceneEditorComponent",
                components: ["SceneEditorComponent"],
                moduleName: "SceneEditorPluginModule",
                displayName: "场景编辑",
                events: {
                    OPEN_SCENE_EDITOR: "open-scene-editor",
                },
                contributes: {
                    workbenchStage: {
                        component: "SceneEditorComponent",
                    },
                },
            });
            var active = exports('active', function (context) {
                // context.eventBus.on(config.events.OPEN_SCENE_EDITOR, function () {
                // });
                context.puzzle
                    .getPuzzleSlot(WORKBENCH_PUZZLE_BLOCK.WORKBENCH_STAGE)
                    .container.renderComponent("SceneEditorComponent");
            });
            var deactive = exports('deactive', function (context) { });

        }
    };
});
