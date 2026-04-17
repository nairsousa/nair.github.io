import React from "react";

function Projetos() {
  const projetos = [
    {
      id: 1,
      nome: "PORTFOLIO PARA A DICIPLINA PROGRAMAÇÃO WEB",
      descricao: "Portfolio Sobre mim com informações pessoais"
    },
     ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="projetos-container">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="card">
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
