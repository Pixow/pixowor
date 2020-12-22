import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ElectronService, LocalStorageService, QingWebApiService } from "./services";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ElectronService, QingWebApiService, LocalStorageService],
})
export class CoreModule {}
