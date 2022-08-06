import React from "react";

import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";

const RequiredAuth = () => {
   const accessToken = useAppSelector((state) => state.auth.accessToken);
   const location = useLocation();

   console.log(accessToken);

   return accessToken ? (
      <Outlet />
   ) : (
      <Navigate to="/login" state={{ from: location }} replace />
   );
};

export default RequiredAuth;
