import { OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
export declare class UserProfileComponent implements OnInit {
    private store;
    constructor(store: Store);
    ngOnInit(): void;
}
