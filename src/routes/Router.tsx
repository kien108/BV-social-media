import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Layout from "../layout";
import RequiredAuth from "../modules/auth/pages/requiredAuth/RequiredAuth";
import routes from "./page";
import ProtectedRoute from "./ProtectedRoute";

import { useNavigate } from "react-router-dom";
const Router = () => {
   return (
      <Routes>
         {routes.map((item) =>
            item.auth ? (
               <Route key={item.path} element={<RequiredAuth />}>
                  <Route key={item.path} element={<ProtectedRoute route={item} />}>
                     <Route element={<Layout route={item} />}>
                        <Route key={item.path} path={item.path} element={<item.component />} />
                     </Route>
                  </Route>
               </Route>
            ) : (
               <Route key={item.path} path={item.path} element={<item.component />} />
            )
         )}
      </Routes>
   );
};

export default Router;
