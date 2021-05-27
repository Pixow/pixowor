import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Inject,
  NgModule,
  OnInit,
} from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import compareVersions from "compare-version";
import { AccordionModule } from "primeng/accordion";
import { FileUploadModule } from "primeng/fileupload";
import { CommonModule } from "@angular/common";
import { PluginStore, usePluginStore } from "angular-pluggable";
import { WorkbenchConfig } from "workbench/environments/environment";
import { ContextService } from "workbench/app/core/services/context.service";

@Component({
  selector: "plugins-market",
  templateUrl: "./plugins-market.component.html",
  styleUrls: ["./plugins-market.component.scss"],
})
export class PluginsMarketComponent implements OnInit {
  private pluginStore: PluginStore = usePluginStore();
  plugins$ = new BehaviorSubject([]);
  constructor() {}

  ngOnInit() {}

  public installPlugin(pluginName: string, pluginVersion: string) {
    // 下载插件
    // 安装插件
  }

  // 显示插件详情
  public showPluginDetail(pluginName: string) {}

  // 禁用插件
  public disable(pluginName: string) {}

  // 卸载插件
  public uninstall(pluginName: string) {}

  // 更新插件
  public update(pluginName: string) {}

  // public installPlugin(pluginName: string, pluginVersion: string) {
  //   const zipFileName = `${pluginName}_${pluginVersion}.zip`;
  //   const uri = this.pluginStore
  //     .getContext<ContextService>()
  //     .url.resolve(WorkbenchConfig.WEB_RESOURCE_URI, zipFileName);
  //   const output = url.resolve(this.electronService.tempPath, zipFileName);

  //   // TODO: 只使用appDataPath
  //   const appPath =
  //     WorkbenchConfig.environment === "DEVELOPMENT"
  //       ? this.electronService.appPath
  //       : this.electronService.userDataPath;

  //   this.downloadFile({ uri, output }, () => {
  //     const pluginFolder = path.join(appPath, `${PLUGINS_FOLDER}/${pluginName}`);
  //     const pluginConfig = path.join(appPath, PLUGINS_CONFIG_FILE);
  //     this.unzipFile({ source: output, dest: pluginFolder }, () => {
  //       this.readFile(path.join(pluginFolder, "package.json"), (res) => {
  //         const pkg = JSON.parse(res.data);

  //         const newPlugin = {
  //           name: pkg.name,
  //           moduleBundlePath: url.resolve(
  //             PLUGINS_WEB_URI,
  //             `${PLUGINS_FOLDER}/${pluginName}/bundle.js`
  //           ),
  //         };

  //         this.getConfigData(PLUGINS_CONFIG_FILE, ({ data }) => {
  //           const config = JSON.parse(data);
  //           config.push(newPlugin);
  //           this.writeJson({ filePath: pluginConfig, content: config }, () => {
  //             // create plugin
  //             AppComponent.instance.createPlugin(newPlugin as unknown as any);
  //             cb();
  //           });
  //         });
  //       });
  //     });
  //   });
  // }

  onUpload(event) {
    //   console.log("event: ", event.files);
    //   const pkgFile = event.files.find((file) => file.name === "package.json");
    //   this.context.readFile(pkgFile.path, async ({ data }) => {
    //     const pkg = JSON.parse(data);
    //     const folderName = pkg.name + `_${pkg.version}`;
    //     const res = await this.context.sdk.plugin.getPlugin(pkg.name);
    //     const plugin = res.data.data.list[0];
    //     if (plugin) {
    //       if (compareVersions(plugin.version, pkg.version) >= 0) {
    //         this.context.error("插件版本已存在！");
    //       } else {
    //         this.context.zipFiles(
    //           { files: event.files.map((file) => file.path), folderName },
    //           async ({ error, data }) => {
    //             if (error) {
    //               console.log("error: ", error);
    //             } else {
    //               const { name, filePath } = data;
    //               const res = await this.context.sdk.util.getQiniuToken({ name });
    //               const { token } = res.data.data;
    //               this.context.uploadFile({ uri: filePath, key: name, qiniuToken: token }, (res) => {
    //                 console.log("uploadFile: ", res);
    //                 this.context.sdk.plugin
    //                   .updatePlugin(plugin._id, { version: pkg.version })
    //                   .then((res) => {
    //                     this.context.success("插件上传成功！");
    //                   });
    //               });
    //             }
    //           }
    //         );
    //       }
    //     } else {
    //       this.context.sdk.plugin
    //         .createPlugin({
    //           name: pkg.name,
    //           description: pkg.description,
    //           version: pkg.version,
    //         })
    //         .then((res) => {
    //           this.context.zipFiles(
    //             { files: event.files.map((file) => file.path), folderName },
    //             async ({ error, data }) => {
    //               const { name, filePath } = data;
    //               console.log("name: ", name);
    //               const res = await this.context.sdk.util.getQiniuToken({ name });
    //               const { token } = res.data.data;
    //               this.context.uploadFile({ uri: filePath, key: name, qiniuToken: token }, (res) => {
    //                 console.log("uploadFile: ", res);
    //                 this.context.success("插件上传成功！");
    //               });
    //             }
    //           );
    //         });
    //     }
    //   });
  }
}

@NgModule({
  imports: [CommonModule, AccordionModule, FileUploadModule],
  declarations: [PluginsMarketComponent],
})
export class PluginsMarketModule {}
