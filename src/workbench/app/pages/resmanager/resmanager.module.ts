import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@workbench/app/shared/shared.module";
import { ResmanagerRoutingModule } from "./resmanager-routing.module";
import { ResmanagerComponent } from "./resmanager.component";
import { GameManagerComponent } from "./components/game-manager/game-manager.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { PluginManagerComponent } from './components/plugin-manager/plugin-manager.component';
import { GameItemComponent } from './components/game-item/game-item.component';

@NgModule({
  declarations: [ResmanagerComponent, NavigationComponent, GameManagerComponent, PluginManagerComponent, GameItemComponent],
  imports: [SharedModule, RouterModule],
})
export class ResmanagerModule {}
