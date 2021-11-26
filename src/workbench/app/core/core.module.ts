import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ElectronService, ContextService } from "./services";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [ElectronService, ContextService],
})
export class CoreModule { }
