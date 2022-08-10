import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import ForbiddenPage from "../components/forbidden/ForbiddenPage";
import { Route } from "./page";

interface Props {
   route: Route;
}
const ProtectedRoute: React.FC<Props> = (props) => {
   const { route } = props;
   const { roles } = route;

   const currentRole = useAppSelector((state) => state.auth?.role);

   const checkProtected = roles.some((role) => role === currentRole);

   return checkProtected ? <Outlet /> : <ForbiddenPage />;
};

export default ProtectedRoute;
