export interface Plugin {
  name: string;
  description: string;
  version: string;
  author: string;
  icon?: string;
  active: boolean;
}
