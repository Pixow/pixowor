export declare enum Order {
    DESC = "desc",
    ASC = "asc"
}
export interface OrderCondition {
    name: string;
    field: string;
    order: Order;
}
export declare class AppConfig {
    WEB_RESOURCE_URI: string;
}
