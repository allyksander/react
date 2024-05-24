import { FormEvent, useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "@redux/Reducer/todosReducer";
import "./TodosForm.scss";

export const TodosForm = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  const todosFormSubmit = (e: FormEvent): void => {
    e.preventDefault();

    addTodo();
    resetTitle();
    resetCompleted();
  };

  const setTitleHandler = (event: ChangeEvent<HTMLInputElement>): void =>
    setTitle(event.target.value);

  const resetTitle = (): void => setTitle("");

  const setCompletedHandler = (event: ChangeEvent<HTMLInputElement>): void =>
    setCompleted(event.target.checked);

  const resetCompleted = (): void => setCompleted(false);

  const addTodo = (): void => {
    dispatch({
      type: ActionTypes.ADD,
      payload: {
        id: Date.now(),
        title,
        completed,
      },
    });
  };

  return (
    <form action="" className="todos-form" onSubmit={todosFormSubmit}>
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
      <button type="submit" className="todos-form__button">
        Add todo
      </button>
    </form>
  );
};
