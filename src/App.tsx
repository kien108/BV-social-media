import React from "react";
import "./App.scss";

import Layout from "./layout";
import RequiredAuth from "./modules/auth/pages/requiredAuth/RequiredAuth";
import Login from "./modules/auth/pages/login/Login";
import DashboardPage from "./modules/dashboard";
import CalendarPage from "./modules/calendar";
import AnalyticsPage from "./modules/analytics/pages/AnalyticsPage";
import AdsPage from "./modules/ads/pages/AdsPage";
import CampaignsPage from "./modules/campaigns/pages/CampaignsPage";
import SettingsPage from "./modules/settings/pages/SettingsPage";

import { Routes, Route } from "react-router-dom";
import Register from "./modules/auth/pages/register/Register";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<RequiredAuth />}>
               <Route element={<Layout />}>
                  <Route index element={<DashboardPage />} />
                  <Route path="/calendar" element={<CalendarPage />} />
                  <Route path="/analytics" element={<AnalyticsPage />} />
                  <Route path="/ads" element={<AdsPage />} />
                  <Route path="/campaigns" element={<CampaignsPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
               </Route>
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
         </Routes>
      </div>
   );
}

export default App;
