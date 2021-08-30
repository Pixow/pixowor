import { Component } from "@angular/core";
import { QingCore } from "qing-core";
import compareVersions from "compare-version";
import { Inject } from "typedi";

// TODO: Delete this plugin
@Component({
  selector: "upload-plugin",
  templateUrl: "./upload-plugin.component.html",
  styleUrls: ["./upload-plugin.component.scss"],
})
export class UploadPluginComponent {
  @Inject() qingCore: QingCore;

  async uploadPluginCover(event) {
    console.log(">> plugin cover: ", event.files);
    //  const { name, filePath } = data;
    //           console.log(">> zip files: ", name, filePath);
    //           const res = await this.context.sdk.util.getQiniuToken({ name });
    //           const { token } = res.data.data;

    // this.context.uploadFile(
    //     { uri: filePath, key: name, qiniuToken: token },
    //     ({ error, data }) => {
    //       this.pluginStore.dispatchEvent(
    //         new Event("Toast", {
    //           severity: "success",
    //           message: "插件上传成功！",
    //         })
    //       );

    //       this.context.removeFile(filePath, () => {});
    //     }
    //   );
  }

  async uploadPluginFiles(event) {
    //   console.log("event: ", event.files);
    //   const pkgFile = event.files.find((file) => file.name === "package.json");
    //   let iconFile;
    //   this.context.readFile(pkgFile.path, { encoding: "utf8" }, async ({ data }) => {
    //     const pkg = JSON.parse(data);
    //     const folderName = pkg.name + `_${pkg.version}`;
    //     const res = await this.context.sdk.plugin.getPlugin(pkg.name);
    //     const plugin = res.data.data.list[0];
    //     console.log(
    //       "🚀 ~ file: upload-plugin.component.ts ~ line 46 ~ UploadPluginComponent ~ this.context.readFile ~ plugin",
    //       plugin
    //     );
    //     iconFile = event.files.find((file) => file.name === pkg.icon);
    //     if (!iconFile) {
    //       this.pluginStore.dispatchEvent(
    //         new Event("Toast", {
    //           severity: "warn",
    //           message: "请提供插件图标！",
    //         })
    //       );
    //       return;
    //     }
    //     if (plugin && compareVersions(plugin.version, pkg.version) >= 0) {
    //       this.pluginStore.dispatchEvent(
    //         new Event("Toast", {
    //           severity: "warn",
    //           message: "插件版本已存在！",
    //         })
    //       );
    //       return;
    //     }
    //     if (plugin && compareVersions(plugin.version, pkg.version) < 0) {
    //       await this.context.sdk.plugin.updatePlugin(plugin._id, {
    //         name: pkg.name,
    //         description: pkg.description,
    //         version: pkg.version,
    //         author: pkg.author,
    //         icon: pkg.icon,
    //       });
    //     } else {
    //       await this.context.sdk.plugin.createPlugin({
    //         name: pkg.name,
    //         description: pkg.description,
    //         version: pkg.version,
    //         author: pkg.author,
    //         icon: pkg.icon,
    //       });
    //     }
    //     this.context.zipFiles(
    //       { files: event.files.map((file) => file.path), folderName },
    //       async ({ error, data }) => {
    //         if (error) {
    //           this.pluginStore.dispatchEvent(
    //             new Event("Toast", {
    //               severity: "error",
    //               message: error,
    //             })
    //           );
    //           return;
    //         }
    //         // 上传zip文件
    //         const { name, filePath } = data;
    //         console.log(">> zip files: ", name, filePath);
    //         const res = await this.context.sdk.util.getQiniuToken({ name });
    //         const { token } = res.data.data;
    //         this.context.uploadFile(
    //           { uri: filePath, key: name, qiniuToken: token },
    //           async ({ error, data }) => {
    //             // 上传封面图
    //             const key = `${pkg.name}/${pkg.version}/${pkg.icon}`;
    //             const coverRes = await this.context.sdk.util.getQiniuToken({
    //               name: key,
    //             });
    //             this.context.uploadFile(
    //               {
    //                 uri: iconFile.path,
    //                 key,
    //                 qiniuToken: coverRes.data.data.token,
    //               },
    //               ({ error, data }) => {
    //                 this.pluginStore.dispatchEvent(
    //                   new Event("Toast", {
    //                     severity: "success",
    //                     message: "插件上传成功！",
    //                   })
    //                 );
    //                 this.pluginStore.dispatchEvent(new Event("CloseDialog"));
    //               }
    //             );
    //             // 删除临时文件
    //             this.context.removeFile(filePath, () => {});
    //           }
    //         );
    //       }
    //     );
    //   });
  }
}
