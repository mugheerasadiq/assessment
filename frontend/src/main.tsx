import React from "react";
import Signup from "./pages/signup";
import { Routes, Route } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./config/routes";
import { IRoute } from "./types";

const Main = () => {
  return (
    <Routes>
      {PRIVATE_ROUTES.map((route: IRoute) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <route.context>
                <route.layout>
                  <route.component />
                </route.layout>
              </route.context>
            }
          />
        );
      })}
      {PUBLIC_ROUTES.map((route: IRoute) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default Main;
