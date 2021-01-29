import { OnInit } from "@angular/core";
import { ElectronService } from "workbench/app/core/services";
export declare class PluginManagerComponent implements OnInit {
    private electronService;
    plugins: {
        title: string;
        name: string;
        icon: string;
    }[];
    constructor(electronService: ElectronService);
    ngOnInit(): void;
}
