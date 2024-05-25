import { RootReducerState } from "@redux/reducers/rootReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useSelectorTyped: TypedUseSelectorHook<RootReducerState> =
  useSelector;
