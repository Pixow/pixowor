import { NgModule, ErrorHandler, Injectable, Inject } from "@angular/core";
import { PixoworCore, Severity } from "pixowor-core";

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  constructor(@Inject(PixoworCore) private pixoworCore: PixoworCore) {}

  handleError(error: Error) {
    console.error("ErrorHandlerService ERROR! ", error);
    this.pixoworCore.workspace.toast(Severity.ERROR, error.message);
  }
}
