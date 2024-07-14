import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [EstadoModal, setEstadoModal] = useState(false);

  return (
    <ModalContext.Provider value={{EstadoModal , setEstadoModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext;