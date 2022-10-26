import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado";
  const nota = Math.ceil(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        {props.aluno} tem nota <strong>{nota}</strong> e foi{" "}
        <strong>{status}</strong>
      </p>
    </div>
  );
}
