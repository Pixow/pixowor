export interface ActivitybarItem {
  title: string;
  icon: string;
  id: string;
  command: () => void;
}
