import { Component } from "@angular/core";
import { Event, PluginStore, usePluginStore } from "angular-pluggable";
import { ContextService } from "workbench/app/core/services/context.service";
import {PluginsMarketService} from '../../plugins-market.service'

@Component({
  selector: "test-plugin",
  template: `
    <div class="upload-plugin">
      <div class="upload-filed">
        <h5>选择文件</h5>
        <p-fileUpload
          name="myfile[]"
          multiple="true"
          customUpload="true"
          showCancelButton="false"
          (uploadHandler)="uploadPluginFilesForTest($event)"
        >
          <ng-template let-file pTemplate="file">
            <div class="file-info">{{ file.name }} - {{ file.size }} bytes</div>
          </ng-template>
        </p-fileUpload>
      </div>
    </div>
  `,
  styleUrls: ["./test-plugin.component.scss"],
})
export class TestPluginComponent {
  private pluginStore: PluginStore = usePluginStore();
  private context: ContextService = this.pluginStore.getContext<ContextService>();

  constructor(private ctrl: PluginsMarketService) {}

  uploadPluginFilesForTest(event) {
    const files = event.files;
    console.log(
      "🚀 ~ file: test-plugin.component.ts ~ line 32 ~ TestPluginComponent ~ uploadPluginForTest ~ files",
      files
    );

    const pkgFile = event.files.find((file) => file.name === "package.json");
    this.context.readFile(pkgFile.path, ({data}) => {
      const pkg = JSON.parse(data)

      const destDir = this.context.path.join(this.context.pluginDirectory, pkg.name)
      const copyFiles = files.map(f => ({path: f.path, name: f.name}))

      this.context.copyFiles(copyFiles, destDir, () => {

        this.ctrl.activePlugin(pkg, () => {

          this.pluginStore.dispatchEvent(
            new Event("Toast", {
              severity: "success",
              message: "测试安装成功！",
            })
          );
        })
      });
    })
  }
}
