import styled from "styled-components";
import TablaChat from "../TablaChat/TablaChat";
export function SidebarContac() {
return (<Container>
    <div className="ContainerLogo">
        <div className="logotipo">

        </div>
    </div>
    <div className="ContainerChat">
        <TablaChat/>
    </div>
    <div className="ContainerCerrarSesion">
            <button type="submit" className="BtnCerrarSesion">Cerrar Sesión</button>
    </div>
</Container>);
}
const Container = styled.div`
 width: 30%;
 background-color: #a5d8ff;
 height: 100%;
 display: flex;
 flex-direction: column;


 .ContainerLogo{
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    .logotipo{
        border-radius: 50%;
        width: 120px;
        border: 1px solid #ccc;
        background-color: #ffffff;
        height: 120px;
    }
 }
 .ContainerChat{
    height: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
 }
 .ContainerCerrarSesion{
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

    .BtnCerrarSesion{
        height: 3rem;
        width: 120px;
        border: none;
        border-radius: 5px;
        background-color: red;
        color: white;
        transition: background-color 0.3s ease, transform 0.2s ease-out;

        &:hover{
            background-color: #a70000;
            transform: scale(1.05);
        }
    }
 }
`