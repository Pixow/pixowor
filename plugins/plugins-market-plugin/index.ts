export const config = {
  name: "plugins-market-plugin",
  moduleBundlePath: "",
  moduleName: "PluginsMarketPluginModule",
  displayName: "插件市场",
  contributes: {
    workbenchActivitybar: [
      {
        id: "pluginsMarket",
        title: "插件市场 ",
        icon: "",
      },
    ],
  },
};
export { PluginsMarketPluginModule } from "./src/module";
