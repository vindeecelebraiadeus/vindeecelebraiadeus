import "./sobre.css";
import { ReactComponent as Logo } from "./logo.svg";

const Sobre = () => {
  return (
    <div className="sobre flex justify-center" id="sobre">
      <div className="flex items-center">
        <Logo className="logo" />
        <h2>Sobre o Ministério Vinde e Celebrai a Deus</h2>
      </div>
    </div>
  );
};

export default Sobre;
