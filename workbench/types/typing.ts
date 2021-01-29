export enum Order {
  DESC = "desc",
  ASC = "asc",
}

export interface OrderCondition {
  name: string;
  field: string;
  order: Order;
}

export class AppConfig {
  WEB_RESOURCE_URI: string;
}
