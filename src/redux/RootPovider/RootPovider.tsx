import { ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "@redux/Store/Store";

export const RootPovider = ({
  children,
}: {
  children?: ReactElement | ReactElement[];
}) => <Provider store={store}>{children}</Provider>;
