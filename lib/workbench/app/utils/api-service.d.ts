import { IQingWebApiSdk } from "qing-web-api-sdk";
import { IUser } from "../models/user";
export declare class ApiService {
    private _sdk;
    get sdk(): IQingWebApiSdk;
    constructor();
    setInterceptors(user: IUser): void;
}
