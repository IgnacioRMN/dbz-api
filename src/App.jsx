import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Spinner } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setMostrarSpinner(true);
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
      setMostrarSpinner(false);
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
        {mostrarSpinner === true ? (
          <Spinner animation="border" variant="info" />
        ) : (
          <Frase personaje={personaje}></Frase>
        )}

        <Button variant="warning" className="mt-3" onClick={consultarAPI}>
          Obtener Personaje
        </Button>
      </Container>
    </>
  );
}

export default App;
