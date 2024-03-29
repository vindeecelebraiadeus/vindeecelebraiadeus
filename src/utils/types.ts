export type Props = {
  children: string | JSX.Element | JSX.Element[] | "() => JSX.Element"
}

export interface MenuItem{
  title: string
  link: string
}

export interface MenuItems {
  item: MenuItem
}