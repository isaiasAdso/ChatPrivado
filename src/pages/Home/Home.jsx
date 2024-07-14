import styled from "styled-components";
import { SidebarContac } from "../../Components/SidebarConctac/SidebarContac";
import { Bienvenida } from "../Bienvenida/Bienvenida";

export function Home() {
  return (
    <Container>
      <SidebarContac />
      <Bienvenida />
    </Container>
  );
}
const Container = styled.div`
  background-color: #f0f2f5;
  height: 100vh;
  width: 100%;
  display: flex;
`;
