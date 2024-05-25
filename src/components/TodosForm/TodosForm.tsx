import { FormEvent, useState, ChangeEvent } from "react";
import { useActions } from "@redux/hooks/useActions";
import { TodosItem } from "@components/TodosItem/type";
import "./TodosForm.scss";

export const TodosForm = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const { addTodosItem, addTodosItemAsync } = useActions();

  const getNewTodoData = (): TodosItem => {
    return {
      id: Date.now().toString(),
      title: title === "" ? "No name" : title,
      completed,
    };
  };

  const addTodosItemDefault = (e: FormEvent): void => {
    e.preventDefault();

    addTodosItem(getNewTodoData());
    resetTitle();
    resetCompleted();
  };

  const setTitleHandler = (event: ChangeEvent<HTMLInputElement>): void =>
    setTitle(event.target.value);

  const resetTitle = (): void => setTitle("");

  const setCompletedHandler = (event: ChangeEvent<HTMLInputElement>): void =>
    setCompleted(event.target.checked);

  const resetCompleted = (): void => setCompleted(false);

  return (
    <div className="todos-form">
      <label className="todos-form__item">
        <input
          type="text"
          name=""
          value={title}
          onInput={setTitleHandler}
          required
          className="todos-form__input"
        />
      </label>
      <label className="todos-form__item">
        <input
          type="checkbox"
          name=""
          checked={completed}
          onChange={setCompletedHandler}
        />
        <span>Completed</span>
      </label>
      <button
        type="submit"
        className="todos-form__button"
        onClick={addTodosItemDefault}
      >
        Add todo
      </button>
      <button
        type="button"
        className="todos-form__button"
        onClick={() => {
          addTodosItemAsync(getNewTodoData());
        }}
      >
        Add todo async
      </button>
    </div>
  );
};
