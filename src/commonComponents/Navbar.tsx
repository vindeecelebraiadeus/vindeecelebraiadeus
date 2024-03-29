import "../styles/navbar.css";
import { Button } from "./Button";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img  src="trono.png" alt="Logomarca da igreja" />
      </div>
      <div className="endpage-buttons">
        <Button children={<p>Peça uma oração</p>}/>
        <Button children={<p className="menu-trigger">Menu Principal</p>}/>
      </div>
    </nav>
  );
};
