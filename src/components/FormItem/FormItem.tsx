import { IInputField } from "@components/Posts/CreatePost/type";

export const InputField = ({ tag, label, error, register }: IInputField) => {
  const Tag = tag;

  return (
    <label className={`form__item${error ? " form__item--error" : ""}`}>
      <span className="form__item-name">{label}</span>
      <Tag
        type={tag === "input" ? "text" : undefined}
        className="form__item-value"
        {...register}
      />
    </label>
  );
};
