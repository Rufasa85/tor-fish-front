import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home"
import TankDetails from "./pages/TankDetails"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/tank/:id',
        element: <TankDetails/>,
      },
      // {
      //   path: '/Blog',
      //   element: <Blog />,
      // },
      // {
      //   path: '/Contact',
      //   element: <Contact />,
      // },
      // {
      //   path: '/users/:person',
      //   element: <><h1>Joes route</h1></>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);