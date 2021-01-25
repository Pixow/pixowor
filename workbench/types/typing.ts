export enum Order {
  DESC = "desc",
  ASC = "asc",
}

export interface OrderCondition {
  name: string;
  field: string;
  order: Order;
}

export interface ActivitybarItem {
  pluginName: string;
  title: string;
  icon: string;
}

export const CONTEXT_TOKEN_NAME = "context";
export class AppConfig {
  WEB_RESOURCE_URI: string;
}
