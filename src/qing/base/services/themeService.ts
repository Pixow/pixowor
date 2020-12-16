import { IStateService } from "./stateService";

const THEME_BG_STORAGE_KEY = "themeBackground";

export interface IThemeService {
  getBackgroundColor(): string;
}

export class ThemeService implements IThemeService {
  constructor(private stateService: IStateService) {}

  getBackgroundColor(): string {
    const background = this.stateService.getItem<string>(THEME_BG_STORAGE_KEY);

    return background;
  }
}
