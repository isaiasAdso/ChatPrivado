import { createContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [EstadoChat, setEstadoChat] = useState(false);

  const AbrirChat = () =>{
    setEstadoChat(true);
  }

  return (
    <ChatContext.Provider value={{ EstadoChat, setEstadoChat, AbrirChat }}>
      {children}
    </ChatContext.Provider>
  );
};
export default ChatContext;