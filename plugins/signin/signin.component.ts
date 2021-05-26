import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Event, PluginStore, usePluginStore, LocalStorage } from "angular-pluggable";
import { QingWebApiSdk } from "qing-web-api-sdk";

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
  private pluginStore: PluginStore = usePluginStore();
  private api = QingWebApiSdk.getInstance();

  constructor(private store: Store) {
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
    this.api.auth
      .editorSignin(account, password)
      .then((res) => {
        this.isSubmitted = false;
        const { data } = res.data;
        LocalStorage.set("user", data);
        this.pluginStore.getObserver("user").next(data);
        this.pluginStore.dispatchEvent(new Event("CloseDialog"));
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
