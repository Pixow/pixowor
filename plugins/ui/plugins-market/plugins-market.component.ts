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

@Component({
  selector: "plugins-market",
  templateUrl: "./plugins-market.component.html",
  styleUrls: ["./plugins-market.component.scss"],
})
export class PluginsMarketComponent implements OnInit {
  plugins$ = new BehaviorSubject([]);
  constructor() {}

  ngOnInit() {}

  installPlugin(pluginName: string, pluginVersion: string) {
    // this.context.installPlugin({ pluginName, pluginVersion }, () => {
    //   this.context.success("插件安装成功！");
    // });
  }

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
export class PluginsMarketModule {
  constructor(private resolver: ComponentFactoryResolver) {}

  public resolveComponentFactory(): ComponentFactory<PluginsMarketComponent> {
    return this.resolver.resolveComponentFactory(PluginsMarketComponent);
  }
}
