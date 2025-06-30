import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./assets/main-app/contexts/UserContext.jsx";
import { ColourThemeProvider } from "./assets/main-app/contexts/ThemeContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ColourThemeProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ColourThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
