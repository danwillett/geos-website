import React from "react";
import ReactDOM from "react-dom/client";

import AppContainer from "./components/AppContainer.tsx";
import {ThemeProvider} from "@mui/material"
import theme from "./theme.tsx";

import "./index.css"


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  
    <React.StrictMode>
      <ThemeProvider
            theme={theme}
            >
      <AppContainer />
      </ThemeProvider>
    </React.StrictMode>
  
);