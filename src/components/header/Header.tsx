import { ReactComponent as Logo } from "./logo.svg";
import "./header.css";
import { List } from "@phosphor-icons/react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="flex header justify-between items-center p-4">
      <div className="flex items-center	">
        <Logo className={"logo"} />
        <h2 className={"title-ivcd"}>Igreja Vinde e Celebrai a Deus</h2>
      </div>
      <div>
        <div className="menu">
          <List size={32} />
          <div className="menu-content">
          <div>
              <Link
              className="links"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </div>
            <div>
              <Link
              className="links"
                to="programacao"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Programação
              </Link>
            </div>
            <div>
              <Link 
              className="links"
                to="sobre"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Sobre a IVCD</Link>
            </div>
            <div>
              <Link 
              className="links"
                to="playlist"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Playlist do Youtube</Link>
            </div>
            <div>
              <Link 
              className="links"
                to="oracao"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Peça uma oração</Link>
            </div>
          </div>
        </div>
        <div className="menudesktop">
        <div>
            <Link 
            className="links"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Home</Link>
          </div>
          <div>
            <Link 
            className="links"
                to="programacao"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Programação</Link>
          </div>
          <div>
            <Link 
            className="links"
                to="sobre"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Sobre a IVCD</Link>
          </div>
          <div>
            <Link 
            className="links"
                to="playlist"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Playlist do Youtube</Link>
          </div>
          <div>
            <Link 
            className="links"
                to="oracao"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Peça uma oração</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
