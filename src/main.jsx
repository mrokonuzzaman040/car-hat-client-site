import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'

import Root from './Layout/Root/Root';
import ErrorPage from './Layout/ErrorPage/ErrorPage';
import Login from './RegisterComponent/Login/Login';
import Register from './RegisterComponent/Register/Register';
import Home from './Layout/Home/Home';
import AuthProvider from './Auth/AuthProvider/AuthProvider';
import DashBoard from './Layout/DashBoard/DashBoard';
import PrivetRout from './Auth/PrivetRout/PrivetRout';
import AddItems from './Layout/DashBoard/AddItems/AddItems';
import BMW from './Layout/CarCollections/BMW';
import Toyota from './Layout/CarCollections/Toyota';
import Ford from './Layout/CarCollections/Ford';
import Mercedes from './Layout/CarCollections/Mercedes';
import Tesla from './Layout/CarCollections/Tesla';
import Honda from './Layout/CarCollections/Honda';
import AllCars from './Layout/CarCollections/AllCars';
import UpdateDetails from './Layout/CarCollections/UpdateDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: <PrivetRout><DashBoard></DashBoard></PrivetRout>
      },
      {
        path: "/addItems",
        element: <PrivetRout><AddItems></AddItems></PrivetRout>
      },
      {
        path: '/allcars',
        element: <PrivetRout><AllCars></AllCars></PrivetRout>,
        loader: () => fetch('https://car-hat-server-mrokonuzzaman040-md-rokon-uzzamans-projects.vercel.app/cars').then((res) => res.json()),
      },
      {
        path: 'updateCar/:id',
        element: <UpdateDetails></UpdateDetails>,
        loader: ({ params }) => fetch(`https://car-hat-server-mrokonuzzaman040-md-rokon-uzzamans-projects.vercel.app/cars/${params.id}`),
      },
      {
        path: '/bmw',
        element: <BMW></BMW>
      },
      {
        path: '/toyota',
        element: <Toyota></Toyota>
      },
      {
        path: '/ford',
        element: <Ford></Ford>
      },
      {
        path: "/mercedes",
        element: <Mercedes></Mercedes>
      },
      {
        path: '/tesla',
        element: <Tesla></Tesla>
      },
      {
        path: '/honda',
        element: <Honda> </Honda>
      },
    ],
  },

]);


// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    {/* </QueryClientProvider> */}
  </React.StrictMode >,
)
