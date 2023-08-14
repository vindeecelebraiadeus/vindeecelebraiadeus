import "./oracao.css";
import { HandsPraying } from "@phosphor-icons/react";

const Oracao = () => {
  return (
    <div className="oracao" id="oracao">
      <div className="flex items-center justify-center">
        <HandsPraying size={32} className="prayer" />
        <h2>Peça uma Oração</h2>
        <HandsPraying size={32} className="prayer" />
      </div>
    </div>
  );
};

export default Oracao;
