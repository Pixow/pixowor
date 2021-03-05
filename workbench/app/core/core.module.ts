import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ElectronService, QingWebApiService, ContextService } from "./services";
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [AuthGuardService, ElectronService, QingWebApiService, ContextService],
})
export class CoreModule {}
