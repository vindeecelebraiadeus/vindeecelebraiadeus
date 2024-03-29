import { Props } from "../utils/types"
export const Container = ({children}: Props) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

