import { FunctionNames, IPlugin, PluginStore } from "angular-pluggable";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";

export class DialogPlugin implements IPlugin {
  pluginStore: PluginStore;
  ref: DynamicDialogRef;

  constructor(private dialogService: DialogService) {}

  getPluginName(): string {
    return "dialog@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.addEventListener("ShowInDialog", (event) => {
      const component = this.pluginStore.execFunction(
        FunctionNames.RENDERER_GET_DIALOG_COMPONENT,
        (event.data as any).componentName
      );
      this.ref = this.dialogService.open(component, (event.data as any).config);
    });

    this.pluginStore.addEventListener("CloseDialog", (event) => {
      this.ref.close();
    });
  }

  deactivate(): void {}
}
