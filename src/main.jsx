import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { RouterProvider } from "react-router/dom";
// import { createBrowserRouter } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Homepage from './pages/homepage/Homepage';
import FriendDetails from './pages/fndDetails/FriendDetails';
import TimelineProvider from './context/TimelineProvider';
import { useContext } from 'react';
import { ContextTimeline } from './context/TimelineContext';
import Timeline from './timeline/Timeline';
import Stats from './pages/stats/Stats';




// const contextData = useContext(ContextTimeline);

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch("/data.json")
      },
      {
        path: "/Friends",
        element: <h2>Friends</h2>
      },
     
        {
          path: "/Timeline",
          element: <Timeline />
        },
        {
          path: "/Stats",
          element: <Stats />
        },
      {
        path: "friend/:id",
        element: <FriendDetails />
      },
    ],
    errorElement: <NotFoundPage />

  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>

  </StrictMode>,
)
