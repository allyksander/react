import { IInputField } from "@components/Posts/CreatePost/type";
import "./InputField.scss";

export const InputField = ({ tag, label, error, register }: IInputField) => {
  const Tag = tag;

  return (
    <label className={`input-field${error ? " input-field--error" : ""}`}>
      <span className="input-field__name">{label}</span>
      <Tag
        type={tag === "input" ? "text" : undefined}
        className="input-field__value"
        {...register}
      />
    </label>
  );
};
