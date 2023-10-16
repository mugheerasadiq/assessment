import AuthLayout from "../components/custom/layout/auth";
import Signup from "../pages/signup";
import { IRoute } from "../types";

export const PUBLIC_ROUTES: IRoute[] = [
  {
    path: "/",
    component: Signup,
    layout: AuthLayout,
  },
];

export const PRIVATE_ROUTES: IRoute[] = [
  {
    path: "/users",
    component: Signup,
    layout: AuthLayout,
  },
];
