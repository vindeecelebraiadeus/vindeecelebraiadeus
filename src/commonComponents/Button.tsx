import { Props } from "../utils/types";
import "../styles/button.css";
export const Button = ({ children }: Props) => {
  return <a href="#">{children}</a>;
};
