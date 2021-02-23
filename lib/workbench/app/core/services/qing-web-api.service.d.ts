import { IQingWebApiSdk } from "qing-web-api-sdk";
import { IUser } from "../../models/user";
import { Router } from "@angular/router";
export declare class QingWebApiService {
    private router;
    static instance: QingWebApiService;
    private _sdk;
    get sdk(): IQingWebApiSdk;
    constructor(router: Router);
    setInterceptors(user: IUser): void;
}
