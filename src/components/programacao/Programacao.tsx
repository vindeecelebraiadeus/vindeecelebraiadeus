import "./programacao.css";

const Programacao = () => {
  return (
    <div className="programacao text-center" id="programacao">
      <h2>Programação</h2>
      <div className="text-left">
        <div>
          <h3>Domingo</h3>
          <div className="flex justify-between">
            <p>Intercessão</p>
            <p> Online às 15h</p>
          </div>
          <div className="cultos">
            <p>Culto dos Filhos de Deus</p>
            <p>Domingo às 19h</p>
          </div>
        </div>
        <div>
          <h3>Segunda-feira</h3>
          <div className="cultos">
            <p>Culto de Intercessão</p>
            <p>Presencial às 19h</p>
          </div>
        </div>
        <div>
          <h3>Terça-feira</h3>
          <div className="flex justify-between">
            <p>Intercessão</p>
            <p>Presencial às 18h</p>
          </div>
          <div className="cultos">
            <p>Culto da Família</p>
            <p>Presencial às 19h</p>
          </div>
        </div>
        <div>
          <h3>Quarta-feira</h3>
          <div className="cultos">
            <p>Seminário de Cura Interior</p>
            <p>Presencial às 19h</p>
          </div>
        </div>
        <div>
          <h3>Quinta-feira</h3>
          <div className="cultos">
            <p>Vigília pelas crianças</p>
            <p>Presencial às 20h:30min</p>
          </div>
        </div>
        <div>
          <h3>Sexta-feira</h3>
          <div className="flex justify-between">
            <p>Intercessão</p>
            <p>Presencial às 18h</p>
          </div>
          <div className="cultos">
            <p>Culto de Libertação</p>
            <p>Sexta-feira às 19h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programacao;
