import AuthLayout from "../components/custom/layout/auth";
import MainLayout from "../components/custom/layout/main";
import Signin from "../pages/login";
import Signup from "../pages/signup";
import User from "../pages/user";
import { UserProvider } from "../pages/user/context/userProvider";
import { IRoute } from "../types";

export const PUBLIC_ROUTES: IRoute[] = [
  {
    path: "/",
    component: Signup,
    layout: AuthLayout,
  },
  {
    path: "/login",
    component: Signin,
    layout: AuthLayout,
  },
];

export const PRIVATE_ROUTES: IRoute[] = [
  {
    path: "/users",
    component: User,
    layout: MainLayout,
    context: UserProvider
  },
];
