import React from "react";

import produtos from "../../data/produtos";

import "./TabelaProdutos.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const productsRow = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R${produto.valor.toFixed(2)}</td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
        {productsRow}
      </table>
    </div>
  );
};
