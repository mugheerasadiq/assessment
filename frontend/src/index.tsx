import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./main";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import { NotificationProvider } from "./context/notification/provider";
import { LoaderProvider } from "./context/loader/provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotificationProvider>
        <LoaderProvider>
          <Main />
        </LoaderProvider>
      </NotificationProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
