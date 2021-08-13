export default function ipcBridge(ipc: Electron.IpcMain, moduleName: string, model) {
  ipc.handle(moduleName, async function (event, args) {
    const { action, params } = args;
    const result = await model[action](params).catch((error) => {
      console.error(error);
    });
    return result;
  });

  return model;
}
