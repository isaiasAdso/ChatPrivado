import styled from "styled-components";
import logo from "../../assets/logo.png";
import AuthChat from "../../Hooks/AuthChat";
import { Chat } from "../../Components/Chats/Chat";
export function Bienvenida() {
    const { EstadoChat, setEstadoChat } = AuthChat();

  return (
    <Container>
      <h1>Bienvenida al Chat Privado</h1>
      <div className="ContenedorLogo">
        <img className="Logotipo" alt="" />
      </div>


        {EstadoChat && (
            <Chat/>
        )}

    </Container>
  );
}
const Container = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid;
  position: relative;

  .ContenedorLogo {
    width: 200px;
    height: 200px;

    .Logotipo {
      width: 100%;
    }
  }
`;
