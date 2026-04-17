import React from "react";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import "./style.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <p>
            Sou Nair Sousa, estudante do curso de Sistemas para Internet e estou sempre em busca de novos conhecimentos. 
          </p>
        </section>

        <Projetos />
      </main>

      <footer>
        <p>© 2026 - Meu Portfólio</p>
      </footer>
    </>
  );
}

export default App;
