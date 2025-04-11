import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

function Frase() {
  return (
    <Card
      className="my-1 shadow-lg rounded-4 overflow-hidden bg-dark text-white"
      style={{ maxWidth: "380px" }}
      data-bs-theme="dark"
    >
      <Card.Img
        className="p-2"
        variant="top"
        src="https://dragonball-api.com/characters/goku_normal.webp"
        style={{ height: "250px", objectFit: "contain" }}
      />
      <Card.Body className="p-4 text-center">
        <Card.Title className="fs-3 fw-bold text-primary text-uppercase">
          Goku
        </Card.Title>

        <Row className="mb-3 justify-content-center gap-2">
          <Col
            xs={6}
            className="w-auto badge text-light-emphasis bg-light-subtle border border-light-subtle rounded-pill"
          >
            <strong>Raza:</strong> Saiyan
          </Col>
          <Col
            xs={6}
            className="w-auto  badge text-light-emphasis bg-light-subtle border border-light-subtle rounded-pill"
          >
            <strong>Ki:</strong> 60.000.000
          </Col>
        </Row>

        <p
          className="text-secondary"
          style={{
            maxHeight: "6em",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          El protagonista de la serie, conocido por su gran poder y personalidad
          amigable. Fue enviado a la Tierra para sobrevivir a la destrucción de
          su planeta. Con el tiempo, se convertiría en el defensor del Universo
          7, liderando a los Guerreros Z.
        </p>

        <Button variant="outline-light" size="sm">
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Frase;
