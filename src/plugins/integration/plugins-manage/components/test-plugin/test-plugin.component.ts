import { Component } from "@angular/core";
import { Event, QingCore } from "qing-core";
import { PluginsManageService } from "../../plugins-manage.service";
import { Inject } from "typedi";

// TODO: delete this component
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
  @Inject() qingCore: QingCore;

  constructor(private pluginsMarketService: PluginsManageService) {}

  uploadPluginFilesForTest(event) {
    const files = event.files;

    const pkgFile = event.files.find((file) => file.name === "package.json");
    this.qingCore.ReadFile(pkgFile.path).then((res) => {
      console.log("res: ", res);
    });

    // this.qingCore.readFile(pkgFile.path, { encoding: "utf8" }, ({ data }) => {
    //   const pkg = JSON.parse(data);

    //   const destDir = this.context.path.join(this.context.pluginDirectory, pkg.name);
    //   const copyFiles = files.map((f) => ({ path: f.path, name: f.name }));

    //   this.context.copyFiles(copyFiles, destDir, () => {
    //     this.pluginsMarketService.activePlugin(pkg, () => {
    //       this.qingCore.Emit(
    //         new Event("Toast", {
    //           severity: "success",
    //           message: "测试安装成功！",
    //         })
    //       );
    //     });
    //   });
    // });
  }
}
