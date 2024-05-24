import "./TodoForm.scss";

export const TodoForm = (): JSX.Element => (
  <form action="" className="todo-form">
    <label className="todo-form__item">
      <input type="text" name="" className="todo-form__input" required />
    </label>
    <label className="todo-form__item">
      <input type="checkbox" name="" />
      <span>Completed</span>
    </label>
    <button type="submit" className="todo-form__button">
      Add todo
    </button>
  </form>
);
