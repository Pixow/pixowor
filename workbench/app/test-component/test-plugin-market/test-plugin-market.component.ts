import { AfterViewInit, ChangeDetectorRef, Component, NgZone } from "@angular/core";
import { ContextService } from "workbench/app/core/services";
import { ActivitybarItem, Slot } from "workbench/app/models/slot";
import { DialogService } from "primeng/dynamicdialog";
import compareVersions from "compare-version";
@Component({
  selector: "test-plugin-market",
  templateUrl: "./test-plugin-market.component.html",
  styleUrls: ["./test-plugin-market.component.scss"],
})
export class TestPluginMarketComponent {
  uploadedFiles = [];
  plugins = [
    {
      name: "场景编辑器",
      logo:
        "https://osd-alpha.tooqing.com/pixelpai/SpawnPointNode/5cc42f6417553727db1d2bba/1/5cc42f6417553727db1d2bba.png",
      description: "用于编辑游戏场景，可以放置。",
      author: "moJiXiang",
      id: "sceneEditor",
    },
    {
      name: "场景编辑器",
      logo:
        "https://osd-alpha.tooqing.com/pixelpai/SpawnPointNode/5cc42f6417553727db1d2bba/1/5cc42f6417553727db1d2bba.png",
      description: "用于编辑游戏场景，可以放置各种物件，人物，可以给物件添加脚本逻辑。",
      author: "moJiXiang",
      id: "sceneEditor",
    },
  ];

  games = [
    {
      name: "xxxx",
      description: "是打发打发打发打发",
    },
    {
      name: "xxxxx1",
      description: "撒打发打发打发打发的",
    },
  ];

  constructor(private context: ContextService) {}

  onUpload(event) {
    console.log("event: ", event.files);
    const pkgFile = event.files.find((file) => file.name === "package.json");
    this.context.readFile(pkgFile.path, async ({ data }) => {
      const pkg = JSON.parse(data);
      const folderName = pkg.name + `_${pkg.version}`;
      const res = await this.context.sdk.plugin.getPlugin(pkg.name);
      const plugin = res.data.data.list[0];
      if (plugin) {
        if (compareVersions(plugin.version, pkg.version) >= 0) {
          this.context.error("插件版本已存在！");
        } else {
          this.context.zipFiles(
            { files: event.files.map((file) => file.path), folderName },
            async ({ error, data }) => {
              if (error) {
                console.log("error: ", error);
              } else {
                const { name, filePath } = data;

                const res = await this.context.sdk.util.getQiniuToken({ name });
                const { token } = res.data.data;

                this.context.uploadFile({ uri: filePath, key: name, qiniuToken: token }, (res) => {
                  console.log("uploadFile: ", res);

                  this.context.sdk.plugin
                    .updatePlugin(plugin._id, { version: pkg.version })
                    .then((res) => {
                      this.context.success("插件上传成功！");
                    });
                });
              }
            }
          );
        }
      } else {
        this.context.sdk.plugin
          .createPlugin({ name: pkg.name, description: pkg.description, version: pkg.version })
          .then((res) => {
            this.context.zipFiles(
              { files: event.files.map((file) => file.path), folderName },
              async ({ error, data }) => {
                const { name, filePath } = data;
                console.log("name: ", name);
                const res = await this.context.sdk.util.getQiniuToken({ name });
                const { token } = res.data.data;
                this.context.uploadFile({ uri: filePath, key: name, qiniuToken: token }, (res) => {
                  console.log("uploadFile: ", res);
                  this.context.success("插件上传成功！");
                });
              }
            );
          });
      }
    });
  }
}
