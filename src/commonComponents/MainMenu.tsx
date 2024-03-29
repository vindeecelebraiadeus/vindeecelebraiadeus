import "../styles/mainMenu.css";
import { menuItems } from "../utils/menuItems";
import { DropdownItem } from "./dropdownItem";

export const MainMenu = () => {
  return (
    <menu className="dropdown-menu">
     {menuItems.map((item, key) => {
      return <DropdownItem key={key} item={item}/>
     })}
    </menu>
  );
};
