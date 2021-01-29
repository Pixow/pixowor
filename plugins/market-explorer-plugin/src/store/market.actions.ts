export enum MarketActionsType {
  LIST_COMPONENT = "[MARKET] ListComponent",
  LIST_CUSTOM_FEATURE_PACK = "[MARKET] ListCustomFeaturePack",
}

export namespace MarketActions {
  export class ListComponent {
    public static readonly type = MarketActionsType.LIST_COMPONENT;
    constructor(public pagination?: any, public query?: any) {}
  }

  export class ListCustomFeaturePack {
    public static readonly type = MarketActionsType.LIST_CUSTOM_FEATURE_PACK;
    constructor() {}
  }
}
