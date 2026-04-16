import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { RouterProvider } from "react-router/dom";
// import { createBrowserRouter } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Homepage from './pages/homepage/Homepage';

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
          element: <h2>Timeline</h2>
        },
        {
          path: "/Stats",
          element: <h2>Stats</h2>
        }
    ],
    errorElement: <NotFoundPage />

  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
   
  </StrictMode>,
)
