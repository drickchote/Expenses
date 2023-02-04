export type InputType = "text" | "money" | "select";

export interface InputProps {
  text: string;
  onChange(text: string): void;
}
