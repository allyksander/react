import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { todosActiones } from "@redux/actiones/todosActiones";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...todosActiones,
    },
    dispatch
  );
};
