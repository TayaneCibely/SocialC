import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
