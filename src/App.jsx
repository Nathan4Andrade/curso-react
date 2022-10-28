import React from "react";

import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layouts/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="013 - Mega" color="">
        <Mega qtde={8} />
      </Card>
      <Card titulo="012 - Contador" color="">
        <Contador numeroInicial={10}></Contador>
      </Card>
      <Card titulo="011 - Componente controlado" color="">
        <Input></Input>
      </Card>
      <Card titulo="010 - Comunicação Inireta" color="">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="009 - Comunicação Direta" color=""></Card>
      <Card titulo="008 - Condicional" color="">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Nathan" }} />
        <UsuarioInfo usuario={{ email: "nathan@gmail" }} />
      </Card>
      <Card titulo="007 - Desafio Repetição" color="">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card titulo="006 - Repetição" color="#d69cbc">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="005 - Componente com filhos" color="#d69cbc">
        <Familia sobrenome="Andrade">
          <FamiliaMembro nome="Nathan" />
          <FamiliaMembro nome="Rosemary" />
          <FamiliaMembro nome="Nicolas" />
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
