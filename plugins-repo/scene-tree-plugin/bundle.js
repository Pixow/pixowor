System.register(['qing-workbench', '@angular/common', '@angular/core', '@angular/forms', 'primeng/tree'], function (exports) {
    'use strict';
    var ContextService, WORKBENCH_PUZZLE_BLOCK, CommonModule, Component, Inject, ChangeDetectorRef, NgZone, NgModule, FormsModule, TreeModule;
    return {
        setters: [function (module) {
            ContextService = module.ContextService;
            WORKBENCH_PUZZLE_BLOCK = module.WORKBENCH_PUZZLE_BLOCK;
        }, function (module) {
            CommonModule = module.CommonModule;
        }, function (module) {
            Component = module.Component;
            Inject = module.Inject;
            ChangeDetectorRef = module.ChangeDetectorRef;
            NgZone = module.NgZone;
            NgModule = module.NgModule;
        }, function (module) {
            FormsModule = module.FormsModule;
        }, function (module) {
            TreeModule = module.TreeModule;
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

            var SceneTreeComponent = exports('SceneTreeComponent', /** @class */ (function () {
                function SceneTreeComponent(context, cd, ngZone) {
                    this.context = context;
                    this.cd = cd;
                    this.ngZone = ngZone;
                    this.sceneTree = [];
                }
                SceneTreeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.context.editedSceneConfig$.subscribe(function (sceneConfig) {
                        console.log("scene tree plugin init: ", sceneConfig);
                        if (sceneConfig) {
                            _this.sceneTree = sceneConfig.tree;
                        }
                    });
                };
                SceneTreeComponent = __decorate([
                    Component({
                        selector: "scene-tree",
                        template: "<div class=\"scene-tree\"><p-tree [value]=\"sceneTree\" [filter]=\"true\"></p-tree></div>",
                        styles: [""],
                    }),
                    __param(0, Inject(ContextService)),
                    __metadata("design:paramtypes", [ContextService,
                        ChangeDetectorRef,
                        NgZone])
                ], SceneTreeComponent);
                return SceneTreeComponent;
            }()));

            var SceneTreePluginModule = exports('SceneTreePluginModule', /** @class */ (function () {
                function SceneTreePluginModule() {
                }
                SceneTreePluginModule = __decorate([
                    NgModule({
                        declarations: [SceneTreeComponent],
                        imports: [CommonModule, FormsModule, TreeModule],
                        exports: [SceneTreeComponent],
                        entryComponents: [SceneTreeComponent],
                        providers: [
                            {
                                provide: "SceneTreeComponent",
                                useValue: SceneTreeComponent,
                            },
                        ],
                    })
                ], SceneTreePluginModule);
                return SceneTreePluginModule;
            }()));

            var config = exports('config', {
                name: "scene-tree-plugin",
                id: "sceneTree",
                components: ["SceneTreeComponent"],
                moduleName: "SceneTreePluginModule",
                displayName: "插件市场",
                events: {
                    OPEN_SCENE_TREE: "open-scene-tree",
                },
                contributes: {
                    workbenchExtensions: {
                        component: "SceneTreeComponent",
                    },
                },
            });
            var active = exports('active', function (context) {
                context.puzzle
                    .getPuzzleSlot(WORKBENCH_PUZZLE_BLOCK.WORKBENCH_EXTENSIONS)
                    .container.renderComponent("SceneTreeComponent");
            });
            var deactive = exports('deactive', function (context) { });

        }
    };
});
