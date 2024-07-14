import styled from "styled-components";
import AuthChat from "../../Hooks/AuthChat";
export function Chat() {
  const { EstadoChat, setEstadoChat } = AuthChat();
  return (
    <Container>
      <h1>Chat</h1>
    </Container>
  );
}
const Container = styled.div`
position: absolute;
z-index: 2;
width: 100%;
height: 100%;
background-color: white;
`;
