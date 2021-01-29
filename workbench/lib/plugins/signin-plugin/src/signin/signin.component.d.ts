import { FormGroup } from "@angular/forms";
import { Store } from "@ngxs/store";
import { DynamicDialogRef } from "primeng/dynamicdialog";
interface Introduce {
    title: string;
    description: string;
    image: string;
}
export declare class SigninComponent {
    private store;
    private ref;
    introduces: Introduce[];
    signinForm: FormGroup;
    autoSignin: boolean;
    isSubmitted: boolean;
    constructor(store: Store, ref: DynamicDialogRef);
    get account(): import("@angular/forms").AbstractControl;
    isAccountInvalid(): boolean;
    get password(): import("@angular/forms").AbstractControl;
    isPasswordInvalid(): boolean;
    onSubmit(): void;
}
export {};
