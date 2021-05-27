export interface ActivitybarItem {
  title: string;
  icon: string;
  index: number;
  command: () => void;
}
