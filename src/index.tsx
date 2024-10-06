import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Changelog from "./routes/changelog";
import { FiltersProvider } from "./providers/filters";
import { MouseGyroProvider } from "./providers/mouse-gyro";
import CardDetail from "./routes/card-detail";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/changelog",
          element: <Changelog />,
        },
        {
          path: "/cards",
          element: <Home />,
        },
        {
          path: "/cards/:cardId",
          element: <CardDetail />,
        },
      ],
    },
  ],
  {
    basename: "/aitana-cards",
  }
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <MouseGyroProvider>
      <FiltersProvider>
        <RouterProvider router={router} />
      </FiltersProvider>
    </MouseGyroProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
