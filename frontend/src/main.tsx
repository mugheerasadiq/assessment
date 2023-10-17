import { Routes, Route } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./config/routes";
import { IRoute } from "./types";
import PublicRoute from "./components/custom/route/public";
import PrivateRoute from "./components/custom/route/private";

const Main = () => {
  return (
    <Routes>
      {PRIVATE_ROUTES.map((route: IRoute) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateRoute>
                <route.context>
                  <route.layout>
                    <route.component />
                  </route.layout>
                </route.context>
              </PrivateRoute>
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
              <PublicRoute>
                <route.layout>
                  <route.component />
                </route.layout>
              </PublicRoute>
            }
          />
        );
      })}
    </Routes>
  );
};

export default Main;
