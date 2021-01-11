#### Qing 编辑器架构

```
qing-editor
  |
  -----plugins // 内置扩展，angular-render-plugin
  |
  -----launcher   // Electron app 启动器，管理多进程，给耗时任务开辟独立进程
  |
  -----glue       // 插件胶水，负责将插件和工作台黏合，又可理解为插件管理器
                  // 并且会将glue导出，供社区使用它的类型声明
  |
  -----workbench  // 工作台，插件实装到工作台的插槽中

```
  
qing-web-api-sdk // 图轻平台接口SDK


#### 插件加载流程

```
1. const puzzle = new Puzzle("puzzle")
2. puzzle.use(SceneTreeComponent)
    ----> SceneTreeComponent.install() -> SceneTreeComponent.on
4. puzzle.triggerPluginRender()

```
