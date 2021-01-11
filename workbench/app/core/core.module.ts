import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ElectronService, LocalStorageService, QingWebApiService } from "./services";
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthGuardService, ElectronService, QingWebApiService, LocalStorageService],
})
export class CoreModule {}
