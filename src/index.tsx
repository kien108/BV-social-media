import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "antd/dist/antd.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
);
