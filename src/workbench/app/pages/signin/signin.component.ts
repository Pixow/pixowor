import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Select, Store } from "@ngxs/store";
import { AuthActions } from "@workbench/app/store/auth/auth.actions";

interface Introduce {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: "signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent {
  public introduces: Introduce[];
  public signinForm: FormGroup;
  public autoSignin: boolean;
  public accountIsError = false;

  constructor(private store: Store, private router: Router) {
    this.introduces = [
      {
        title: "快速制作",
        description: "快速制作h5小游戏",
        image: "https://osd-alpha.tooqing.com/d40f8e9310c78e74eca40187a0e5d61a.png",
      },
      {
        title: "素材丰富",
        description: "积累行业十年丰富素材",
        image: "https://osd-alpha.tooqing.com/JLC9R0szI_.png",
      },
    ];

    this.signinForm = new FormGroup({
      account: new FormControl(""),
      password: new FormControl(""),
    });
  }

  onSubmit() {
    this.accountIsError = true;
    this.store.dispatch(new AuthActions.EditorSignin(this.signinForm.value)).subscribe(
      () => {
        this.router.navigateByUrl("resmanager");
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
