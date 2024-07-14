import styled from "styled-components";
import { SidebarContac } from "../../Components/SidebarConctac/SidebarContac";
export function Home() {
return (<Container>
<SidebarContac/>
</Container>);
}
const Container = styled.div`
 background-color: #f0f2f5;
 height: 100vh;
 width: 100%;
`