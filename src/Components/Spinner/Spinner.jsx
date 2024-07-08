import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";

export function Spiner() {
  return (
    <Container>
      <div className="VentanaLoading">
        <Spinner animation="grow" />
      </div>
    </Container>
  );
}
const Container = styled.div`



.VentanaLoading {
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
`;
