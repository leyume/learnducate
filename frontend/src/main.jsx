import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "virtual:uno.css";
import "./assets/css/index.scss";

import routes from "~react-pages";
import Layout from "./components/Layout";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 10 * 60,
    },
  },
});

const App = () => {
  return <Suspense fallback={<p className="text-red-600">Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </QueryClientProvider>
);

// let container = null;

// document.addEventListener("DOMContentLoaded", function (event) {
//   console.log({ routes });

//   if (!container) {
//     container = document.getElementById("root");
//     const root = ReactDOM.createRoot(container);
//     root.render(
//       <Router>
//         <Layout>
//           <App />
//         </Layout>
//       </Router>
//     );
//   }
// });
