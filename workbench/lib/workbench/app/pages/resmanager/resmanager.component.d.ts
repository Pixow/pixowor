import { Store } from "@ngxs/store";
import { ElectronService } from "workbench/app/core/services";
export declare class ResmanagerComponent {
    private electronService;
    private store;
    constructor(electronService: ElectronService, store: Store);
}
