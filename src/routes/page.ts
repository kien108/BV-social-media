import ForbiddenPage from "../components/forbidden/ForbiddenPage";
import NotFoundPage from "../components/notfound/NotFound";
import LayoutNone from "../layout/pages/LayoutNone";
import AdsPage from "../modules/ads/pages/AdsPage";
import AnalyticsPage from "../modules/analytics/pages/AnalyticsPage";
import LoginPage from "../modules/auth/pages/login/LoginPage";
import RegisterPage from "../modules/auth/pages/register/RegisterPage";
import CalendarPage from "../modules/calendar";
import CampaignsPage from "../modules/campaigns/pages/CampaignsPage";
import DashboardPage from "../modules/dashboard";
import SettingsPage from "../modules/settings/pages/SettingsPage";
import SITE_MAP from "./routesString";

export interface Route {
   path: string;
   roles: string[];
   auth: boolean;
   component: () => JSX.Element;
   layout?: () => JSX.Element;
}

export enum ROLES {
   USER = "user",
   ADMIN = "admin",
   TEACHER = "teacher",
   STUDENT = "student",
}

const routes: Route[] = [
   {
      path: SITE_MAP.MAIN,
      component: DashboardPage,
      auth: true,
      roles: [ROLES.ADMIN],
   },
   {
      path: SITE_MAP.CALENDAR,
      component: CalendarPage,
      auth: true,
      roles: [ROLES.USER, ROLES.ADMIN],
   },
   {
      path: SITE_MAP.ANALYTICS,
      component: AnalyticsPage,
      auth: true,
      roles: [ROLES.USER, ROLES.ADMIN],
   },
   {
      path: SITE_MAP.ADS,
      component: AdsPage,
      auth: true,
      roles: [ROLES.USER, ROLES.ADMIN],
   },
   {
      path: SITE_MAP.CAMPAIGNS,
      component: CampaignsPage,
      auth: true,
      roles: [ROLES.USER, ROLES.ADMIN],
   },
   {
      path: SITE_MAP.SETTINGS,
      component: SettingsPage,
      auth: true,
      roles: [ROLES.USER, ROLES.ADMIN],
   },
   {
      path: SITE_MAP.LOGIN,
      component: LoginPage,
      auth: false,
      roles: [ROLES.USER, ROLES.ADMIN],
      layout: LayoutNone,
   },
   {
      path: SITE_MAP.REGISTER,
      component: RegisterPage,
      auth: false,
      roles: [ROLES.USER, ROLES.ADMIN],
      layout: LayoutNone,
   },
   {
      path: SITE_MAP.NOTFOUND,
      component: NotFoundPage,
      auth: false,
      roles: [ROLES.USER, ROLES.ADMIN],
      layout: LayoutNone,
   },
   {
      path: SITE_MAP.FORBIDDEN,
      component: ForbiddenPage,
      auth: false,
      roles: [ROLES.USER, ROLES.ADMIN],
      layout: LayoutNone,
   },
];

export default routes;
