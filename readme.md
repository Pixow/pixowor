### 文档说明

https://dej4esdop1.feishu.cn/docs/doccnwGxIovVIc7WcltU2Nosg0b

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

#### Electron 国内下载加速

DEBUG=\* ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/" npm install electron

```
error-handler.service.ts:6 ErrorHandlerService ERROR!  Error: Uncaught (in promise): TypeError: Cannot read property 'ɵmod' of undefined
TypeError: Cannot read property 'ɵmod' of undefined
    at getNgModuleDef (core.js:1021)
```

https://tiberiuzuld.github.io/angular-gridster2/compact

https://github.com/angular-split

### 绝对路径转换

https://ekoneko.github.io/blog/electron/try-electron/

### 核心插件的多语言更新

在修改核心插件的多语言后，需要将核心插件的 manifest.json 中的版本号提高，这样核心插件的 install 方法才会被执行。

### CheckEnvFiles

只有当用户环境 UserData 中不存在初始化配置，才会写文件，不然会把用户的生产配置给覆盖掉
