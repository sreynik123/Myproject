import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router";

import AppMainlayout from"./layouts/AppMainlayout.jsx"
import Home1 from "./page/Home1";
import People from "./page/People";
import LogIn from "./page/LogIn";
import ContactUs from "./page/ContectUs";
import LogIns from "./page/LogIns";
import Register from "./page/Register";
import AboutUs from "./page/Aboutus";
import Movie from "./page/Movie.jsx";
import { store } from "./page/Store.js";
import { Provider } from "react-redux";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppMainlayout/>,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
      {
        path: "/people",
        element: <People/>,
      },
      {
          path:"/Login",
          element:<LogIn/>
      },
      {
        path :"/ContectUs",
        element:<ContactUs/>
      },
      {
        path:"/Login",
        element:<LogIns/>
      },
      {
        path:"/Register",
        element:<Register/>
      },
      {
        path:"/AboutUs",
        element:<AboutUs/>
      },
      {
        path:"/MovieDetail",
        element:<Movie/>
      },
      
      


    ],
  errorElement:<Error/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
