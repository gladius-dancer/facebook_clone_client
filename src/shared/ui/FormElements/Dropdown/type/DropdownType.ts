export interface DropdownType {
  key: string;
  name: string;
  control: any;
  options: string[];
  size?: 'small' | 'medium' | undefined;
  error?: boolean;
  label?: string;
  checked?: boolean;
  onChange?: any;
}
