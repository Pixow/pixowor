import { NgModule, ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  handleError(error: any) {
    console.error("ErrorHandlerService ERROR! ", error);
  }
}
