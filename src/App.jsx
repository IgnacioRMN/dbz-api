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

  const consultarAPI = async () => {
    /* Solicitudes de datos a una API:
    GET: devuelve datos
    POST: crean un dato
    PUT(total) o PATCH(parcial): modificar datos de un objeto
    DELETE: borrar un dato
     */
    const respuestaAPI = await fetch(
      `https://dragonball-api.com/api/characters/${getRandomIntInclusive()}`
    );
    console.log(respuestaAPI);
    if (respuestaAPI.status === 200) {
      const datos = await respuestaAPI.json();
      console.log(datos);
      setPersonaje(datos);
    } else {
      alert("Intente en unos momentos");
    }
  };

  const getRandomIntInclusive = () => {
    return Math.floor(Math.random() * (40 - 1 + 1) + 1);
  };

  return (
    <>
      <Container className="text-center my-4 d-flex flex-column align-items-center">
        <Frase personaje={personaje}></Frase>

        <Button variant="warning" className="mt-3">
          Obtener Personaje
        </Button>
      </Container>
    </>
  );
}

export default App;
