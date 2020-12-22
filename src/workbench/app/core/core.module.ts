import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ElectronService, LocalStorageService, QingWebApiService } from "./services";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpTokenInterceptor } from "./http.token.interceptor";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },

    ElectronService,
    QingWebApiService,
    LocalStorageService,
  ],
})
export class CoreModule {}
