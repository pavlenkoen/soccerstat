import { Layout } from "../components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "../pages/Error/NotFoundPage";
import { HomePage } from "../pages/Home/HomePage";
import { LeaguesPage } from "../pages/LeaguesPage/LeaguesPage";
import { TeamsPage } from "../pages/TeamsPage/TeamsPage";
import { TeamCalendar } from "../pages/TeamCalendar/TeamCalendar";
import { LeagueCalendar } from "../pages/LeagueCalendar/LeagueCalendar";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "leagues",
        element: <LeaguesPage />,
      },
      {
        path: "teams",
        element: <TeamsPage />,
      },
      {
        path: "team",
        element: <TeamCalendar />,
      },
      {
        path: "league",
        element: <LeagueCalendar />,
      },
    ],
  },
]);
