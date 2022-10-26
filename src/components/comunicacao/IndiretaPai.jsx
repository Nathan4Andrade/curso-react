import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  let [nome, setNome] = useState("?");
  let [idade, setIdade] = useState(0);
  let [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }
  return (
    <div>
      <div>
        <div>Nome: {nome} </div>
        <div>
          Idade: <strong>{idade}</strong>
        </div>
        <div> Você é nerd? {nerd ? "Sim" : "Não"}</div>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
