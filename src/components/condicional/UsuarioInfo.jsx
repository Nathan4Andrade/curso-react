import React from "react";
import If from "./If";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vinde <strong>{usuario.nome}</strong>
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja bem vinde <strong>mana</strong>
      </If>
    </div>
  );
};
