import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <>
      <Container className="text-center my-4 d-flex flex-column align-items-center">
        <Frase></Frase>

        <Button variant="warning" className="mt-3">
          Obtener Personaje
        </Button>
      </Container>
    </>
  );
}

export default App;
