import { IQingWebApiSdk } from "qing-web-api-sdk";
import { Router } from "@angular/router";
import { ContextService } from "./index";
export declare class QingWebApiService {
    private router;
    private context;
    static instance: QingWebApiService;
    private _sdk;
    get sdk(): IQingWebApiSdk;
    constructor(router: Router, context: ContextService);
    private _setInterceptors;
}
