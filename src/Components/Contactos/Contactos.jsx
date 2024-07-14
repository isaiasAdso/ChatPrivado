import React from "react";
import styled from "styled-components";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import AuthChat from "../../Hooks/AuthChat";

// Función para generar un nombre aleatorio
function getRandomName() {
  const names = ["John", "Jane", "Michael", "Sarah", "David", "Emily", "Chris", "Laura", "Daniel", "Emma"];
  const surnames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
  const name = names[Math.floor(Math.random() * names.length)];
  const surname = surnames[Math.floor(Math.random() * surnames.length)];
  return `${name} ${surname}`;
}

// Función para generar una hora aleatoria
function getRandomTime() {
  const hour = Math.floor(Math.random() * 24).toString().padStart(2, '0');
  const minute = Math.floor(Math.random() * 60).toString().padStart(2, '0');
  return `${hour}:${minute}`;
}

// Función para generar un número aleatorio de notificaciones
function getRandomNotifications() {
  return Math.floor(Math.random() * 10);
}

// Generar 1.000 usuarios aleatorios
const contactosData = Array.from({ length: 1000 }, () => ({
  nombre: getRandomName(),
  hora: getRandomTime(),
  notificaciones: getRandomNotifications(),
}));

export function Contactos() {
  const { AbrirChat } = AuthChat();

  return (
    <Container>
      {contactosData.map((contacto, index) => (
        <div className="FilaContacto" key={index} onClick={AbrirChat}>
          <div className="InformacionContactoPerfil">
            <div className="ContainerPhoto">
              <PersonSharpIcon fontSize="large" />
            </div>
          </div>
          <div className="InformacionContactoDatos">
            <h5>{contacto.nombre}</h5>
          </div>
          <div className="InformacionContactoMessage">
            <p>{contacto.hora}</p>
            {contacto.notificaciones > 0 && (
              <div className="Notificaciones">{contacto.notificaciones}</div>
            )}
          </div>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 5px;

  .FilaContacto {
    width: 100%;
    height: 80px;
    display: flex;
    flex: none;
    cursor: pointer;
    &:hover {
      background-color: #ececec;
    }

    .InformacionContactoPerfil {
      width: 15%;
      display: flex;
      align-items: center;
      justify-content: center;

      .ContainerPhoto {
        width: 50px;
        height: 50px;
        background-color: #a3a2a2;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
    }

    .InformacionContactoDatos {
      width: 70%;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
    }

    .InformacionContactoMessage {
      width: 15%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .Notificaciones {
        width: 30px;
        height: 30px;
        background-color: green;
        border-radius: 50%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
