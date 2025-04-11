import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Frase = () => {
  // https://web.dragonball-api.com/
  return (
    <Card className="my-4" data-bs-theme="dark">
      <Card.Img
        className="imgCard"
        variant="top"
        src="https://dragonball-api.com/characters/goku_normal.webp"
      />
      <Card.Body className="text-start">
        <Card.Title className="fs-3 ">Goku</Card.Title>
        <p>
          <b>Raza:</b> Saiyan
        </p>
        <p>
          <b>Ki:</b> 60.000.000
        </p>
        <p>
          <b>Descripción:</b> El protagonista de la serie, conocido por su gran
          poder y personalidad amigable. Originalmente enviado a la Tierra como
          un infante volador con la misión de conquistarla. Sin embargo, el caer
          por un barranco le proporcionó un brutal golpe que si bien casi lo
          mata, este alteró su memoria y anuló todos los instintos violentos de
          su especie, lo que lo hizo crecer con un corazón puro y bondadoso,
          pero conservando todos los poderes de su raza. No obstante, en la
          nueva continuidad de Dragon Ball se establece que él fue enviado por
          sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la
          destrucción de su planeta por parte de Freeza. Más tarde, Kakarot,
          ahora conocido como Son Goku, se convertiría en el príncipe consorte
          del monte Fry-pan y líder de los Guerreros Z, así como el mayor
          defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo
          de la destrucción en innumerables ocasiones, a pesar de no
          considerarse a sí mismo como un héroe o salvador.
        </p>
      </Card.Body>
    </Card>
  );
};

export default Frase;
