import React from "react";

export default function Aleatorio(props) {
  const { min, max } = props;
  const random = parseInt(Math.random() * (max + 1 - min) + min);
  return (
    <>
      <h2>Valor Aleatório</h2>
      <p>Valor mínimo: {min}</p>
      <p>Valor máximo: {max}</p>
      <p>Valor escolhido: {random}</p>
    </>
  );
}
