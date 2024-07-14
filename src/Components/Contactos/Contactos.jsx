import React from "react";
import styled from "styled-components";
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
export function Contactos() {
  return (
    <Container>
      <div className="FilaContacto">
        <div className="InformacionContactoPerfil">
          <div className="ContainerPhoto">
            <PersonSharpIcon fontSize="large"/>
          </div>
        </div>
        <div className="InformacionContactoDatos"></div>
        <div className="InformacionContactoMessage"></div>
      </div>
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
  border: 1px solid; /* Este borde es para visualización y se puede ajustar o eliminar */


  .FilaContacto{
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #ccc;
    display: flex;
    cursor: pointer;
    &:hover{
      background-color: #ececec;
    }




    .InformacionContactoPerfil{
      width: 20%;
     
      display: flex;
      align-items: center;
      justify-content: center;

      .ContainerPhoto{
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
  }
`;
