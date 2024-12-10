import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/effects.css";
import "./assets/css/btn-card-types.css";
import "./assets/css/search.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import { FiltersProvider } from "./providers/filters";
import { MouseGyroProvider } from "./providers/mouse-gyro";
// import Algolia from "./routes/algolia";

const Collections = React.lazy(() => import("./routes/collections"));
const CollectionDetail = React.lazy(() => import("./routes/collection-detail"));
const Changelog = React.lazy(() => import("./routes/changelog"));
const CardDetail = React.lazy(() => import("./routes/card-detail"));
const Contribute = React.lazy(() => import("./routes/contribute"));

const router = createBrowserRouter([
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
        path: "/collections",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Collections />
          </Suspense>
        ),
      },
      {
        path: "/collections/:collectionId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CollectionDetail />
          </Suspense>
        ),
      },
      {
        path: "/changelog",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Changelog />
          </Suspense>
        ),
      },
      {
        path: "/cards",
        element: <Home />,
      },
      {
        path: "/cards/:cardId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CardDetail />
          </Suspense>
        ),
      },
      {
        path: "/contribute",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contribute />
          </Suspense>
        ),
      },
      // {
      //   path: "/algolia",
      //   element: <Algolia />,
      // },
    ],
  },
]);

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
