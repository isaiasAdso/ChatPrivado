import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";

const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [ValorCookie, setValorCookie] = useState((Cookies.get('valor') || null));
  const navigate = useNavigate();
  const location = useLocation();
  const [redireccionar, setRedireccionar] = useState(null);

  useEffect(() => {
    if (ValorCookie && location.pathname === "/*") {
      setRedireccionar(location.pathname);
    } else if (!ValorCookie) {
      navigate("/login");
    }
  }, [ValorCookie, location.pathname]);

  useEffect(() => {
    if (ValorCookie) {
      Cookies.set("valor", ValorCookie);
    }
  }, [ValorCookie]);

  if (redireccionar) {
    return <Navigate to={redireccionar} />;
  }

  // Actualizar la cookie con la última ruta visitada cada vez que el usuario navegue a una nueva ruta
  useEffect(() => {
    Cookies.set("valorCookie", location.pathname);
  }, [location.pathname]);

  return (
    <CookieContext.Provider value={{ ValorCookie, setValorCookie }}>
      {children}
    </CookieContext.Provider>
  );
};
export default CookieContext;