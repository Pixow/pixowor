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
