import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Select } from "@ngxs/store";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { QingWebApiService } from "./core/services";
import { IUser } from "./models";
import { AuthState } from "./store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
  private _destroy: Subject<boolean> = new Subject<boolean>();

  @Select(AuthState.user) user$: Observable<IUser>;

  constructor(private qingWebApiService: QingWebApiService, private router: Router) {
    this.user$.pipe(takeUntil(this._destroy)).subscribe((user) => {
      if (user) {
        // 设置Axios Interceptors
        this.qingWebApiService.setInterceptors(user);
      }
    });
  }

  ngOnDestroy() {
    this._destroy.next(true);
    this._destroy.unsubscribe();
  }
}
