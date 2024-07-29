import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type IInputField = {
  tag: "input" | "textarea";
  label: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
};
