import { Component } from "@angular/core";

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
          (uploadHandler)="uploadPluginForTest($event)"
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
  uploadPluginForTest(event) {}
}
