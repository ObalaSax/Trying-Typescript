import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
//Features Imports
import { Provider } from "react-redux";
import { myStore } from "./features/store.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { appApi } from "./features/API docs/apiConnect.tsx";

//features Imports

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={appApi}>
      <Provider store={myStore}>
        <App />
      </Provider>
    </ApiProvider>
  </StrictMode>,
);
