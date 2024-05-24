import { RootReducerState } from "@redux/Reducer/rootReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useSelectorTyped: TypedUseSelectorHook<RootReducerState> =
  useSelector;
