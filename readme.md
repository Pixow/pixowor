#### Qing 编辑器架构

```
qing
  |
  -----plugins // 内置扩展，使用angular-pluggable开发
  |
  -----launcher   // Electron app 启动器，管理多进程，给耗时任务开辟独立进程
  |
  -----workbench  // 工作台，插件实装到工作台的插槽中

```

图轻平台接口 SDK
qing-web-api-sdk

插件系统赋予 qing 插件化能力
angular-pluggable

#### 插件加载流程

```


```

#### Electron 国内下载加速

DEBUG=\* ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/" npm install electron

```
error-handler.service.ts:6 ErrorHandlerService ERROR!  Error: Uncaught (in promise): TypeError: Cannot read property 'ɵmod' of undefined
TypeError: Cannot read property 'ɵmod' of undefined
    at getNgModuleDef (core.js:1021)
```
