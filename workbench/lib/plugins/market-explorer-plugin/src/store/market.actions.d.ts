export declare enum MarketActionsType {
    LIST_COMPONENT = "[MARKET] ListComponent",
    LIST_CUSTOM_FEATURE_PACK = "[MARKET] ListCustomFeaturePack"
}
export declare namespace MarketActions {
    class ListComponent {
        pagination?: any;
        query?: any;
        static readonly type = MarketActionsType.LIST_COMPONENT;
        constructor(pagination?: any, query?: any);
    }
    class ListCustomFeaturePack {
        static readonly type = MarketActionsType.LIST_CUSTOM_FEATURE_PACK;
        constructor();
    }
}
