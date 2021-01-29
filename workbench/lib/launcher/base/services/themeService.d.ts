import { IStateService } from "./stateService";
export interface IThemeService {
    getBackgroundColor(): string;
}
export declare class ThemeService implements IThemeService {
    private stateService;
    constructor(stateService: IStateService);
    getBackgroundColor(): string;
}
