import { Component, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import storage from "electron-json-storage";
import { PixoworCore, QEvent, UIEvents } from "pixowor-core";
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
  public isSubmitted = false;

  constructor(@Inject(PixoworCore) private pixoworCore: PixoworCore) {
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
      account: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  get account() {
    return this.signinForm.get("account");
  }

  public isAccountInvalid() {
    const account = this.signinForm.get("account");
    return account.invalid && (account.dirty || account.touched);
  }

  get password() {
    return this.signinForm.get("password");
  }

  public isPasswordInvalid() {
    const password = this.signinForm.get("password");
    return password.invalid && (password.dirty || password.touched);
  }

  onSubmit() {
    this.isSubmitted = true;

    const { account, password } = this.signinForm.value;

    this.pixoworCore.pixowApi.auth
      .editorSignin(account, password)
      .then((res) => {
        console.log("signin :", res);
        this.isSubmitted = false;
        const { data } = res;
        this.pixoworCore.storage.set("user", data);
        this.pixoworCore.state.getVariable("user").next(data);

        const settings = storage.getSync("settings");
        storage.set("settings", Object.assign(settings, { token: data.token }), (error) => {
          if (error) {
            console.error(error);
            return;
          }
        });

        this.pixoworCore.setPixowApiToken(data.token);
        this.pixoworCore.workspace.emit(UIEvents.CLOSE_DIALOG);
      })
      .catch((error) => {
        this.isSubmitted = false;
        const { code, msg } = error.response.data;
        if (code === 10101) {
          this.account.setErrors({
            notFound: true,
          });
        }

        if (code === 10102) {
          this.password.setErrors({
            incorrect: true,
          });
        }
      });
  }
}
