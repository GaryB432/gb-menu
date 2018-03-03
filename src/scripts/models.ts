export interface Item {
  text: string;
  href?: string;
  checked?: boolean;
  disabled?: boolean;
  items?: Item[];
}
