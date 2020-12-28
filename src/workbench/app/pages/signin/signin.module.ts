import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { SigninComponent } from "./signin.component";

@NgModule({
  declarations: [SigninComponent],
  imports: [SharedModule],
})
export class SigninModule {}
