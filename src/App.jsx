import React from "react";

import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layouts/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="App">
    <h1>Fundamentos React (Arrow)</h1>
    <div className="Cards">
      <Card titulo="005 - Componente com filhos">
        <Familia sobrenome="Andrade">
          <FamiliaMembro nome="Nathan"></FamiliaMembro>
          <FamiliaMembro nome="Rosemary"></FamiliaMembro>
          <FamiliaMembro nome="Nicolas"></FamiliaMembro>
        </Familia>
      </Card>
      <Card titulo="004 - Desafio Aleatório" color="#d69cbc">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="003 - Fragmento" color="#51074a	">
        <Fragmento></Fragmento>
      </Card>
      <Card titulo="002 - Com Parametro" color="#191970">
        <ComParametro titulo="Situação do aluno" aluno="Nathan" nota={9.3} />
        <ComParametro titulo="Situação do aluno" aluno="Jonas" nota={5.1} />
      </Card>
      <Card titulo="001 - Componentes" color="#ffb6c1	">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
