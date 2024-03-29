import { MenuItems } from "../utils/types"

export const DropdownItem = ({item}: MenuItems) => {
  return (<li><a href={item.link}>{item.title}</a></li>)
}