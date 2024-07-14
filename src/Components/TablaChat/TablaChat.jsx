import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "styled-components";
import { Contactos } from "../Contactos/Contactos"; // Asegúrate de que la ruta sea correcta

export default function TablaChat() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledBox>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <StyledTabList onChange={handleChange} aria-label="lab API tabs example">
            <StyledTab label="Chats" value="1" />
            <StyledTab label="Grupos" value="2" />
          </StyledTabList>
        </Box>
        <StyledTabPanel value="1">
          <Contactos />
        </StyledTabPanel>
        <StyledTabPanel value="2">
          <h1>Grupos</h1>
        </StyledTabPanel>
      </TabContext>
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTabList = styled(TabList)`
  .MuiTabs-indicator {
    background-color: #007bff; // Color del indicador de la pestaña activa
  }
`;

const StyledTab = styled(Tab)`
  &.Mui-selected {
    color: #007bff; // Color del texto de la pestaña activa
  }
  &.MuiTab-root {
    text-transform: none; // Para que el texto no esté en mayúsculas
  }
`;

const StyledTabPanel = styled(TabPanel)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  margin: 0;
  background-color: #ffffff;
  height: calc(100% - 48px); // Ajuste para el tamaño del TabList
  overflow-y: auto;
`;
