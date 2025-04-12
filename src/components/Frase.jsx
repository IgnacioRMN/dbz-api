import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const Frase = ({ personaje }) => {
  return (
    <Card
      className="my-1 shadow-lg rounded-4 overflow-hidden bg-dark text-white"
      style={{ maxWidth: "380px" }}
      data-bs-theme="dark"
    >
      <Card.Img
        className="p-2"
        variant="top"
        src={personaje.image}
        style={{ height: "250px", objectFit: "contain" }}
      />
      <Card.Body className="p-4 text-center">
        <Card.Title className="fs-3 fw-bold text-primary text-uppercase">
          {personaje.name}
        </Card.Title>

        <Row className="mb-3 justify-content-center gap-2">
          <Col
            xs={6}
            className="w-auto badge text-light-emphasis bg-light-subtle border border-light-subtle rounded-pill"
          >
            <strong>Raza:</strong> {personaje.race}
          </Col>
          <Col
            xs={6}
            className="w-auto  badge text-light-emphasis bg-light-subtle border border-light-subtle rounded-pill"
          >
            <strong>Ki:</strong> {personaje.ki}
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
          {personaje.description}
        </p>
      </Card.Body>
    </Card>
  );
};

export default Frase;
