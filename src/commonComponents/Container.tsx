import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

export const Container = () => {
  return (
    <div className="container">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

