/*
  Date 18 Dec 2025
*/

import { createBrowserRouter } from "react-router-dom";

//components
import DefaultLayout from "@/layouts/DefaultLayout";

// pages
import News from "@/pages/page__news";
import Matches from "@/pages/page__matches";
import MatchProfile from "@/pages/page__matchProfile";
import Tournaments from "@/pages/page__tournaments";
import TournamentsProfile from "@/pages/page__tournamentProfile";
import Players from "@/pages/page__players";
import Teams from "@/pages/page__teams";


const PrivateRoutes = createBrowserRouter([

    /* PUIBLIC ROUTES */

    /* PRIVATE ROUTES */
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            //{ index: true, element: <News /> }, (opcional)
            { path: "/news", element: <News /> },
            { 
                path: "/matches", 
                children: [
                    { index: true, element: <Matches /> },
                    { path: ":matchSlug", element: <MatchProfile /> }
                ]
            },
            { 
                path: "/tournaments",
                children: [
                    { index: true, element: <Tournaments /> },
                    { path: ":tournamentSlug", element: <TournamentsProfile />}
                ] 
            },
            { path: "/players", element: <Players /> },
            { path: "/teams", element: <Teams /> },
        ]
    },
    
])

export default PrivateRoutes;