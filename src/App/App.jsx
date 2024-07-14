import { useState } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { CookieProvider } from "../Context/CookieContext";
import AppRoutes from "../routes/Routes";
import { ChatProvider } from "../Context/ChatContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <CookieProvider>
        <ChatProvider>
          <AppRoutes />
        </ChatProvider>
      </CookieProvider>
    </HashRouter>
  );
}

export default App;
