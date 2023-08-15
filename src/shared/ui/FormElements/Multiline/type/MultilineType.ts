export interface MultilineType {
  name: string;
  control: any;
  error?: string;
  label?: string;
  onChange?: any;
  size?: 'small' | 'medium' | undefined;
  placeholder?: string;
  className?: string;
  maxRows?: number;
}
