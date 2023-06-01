import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import "virtual:uno.css";
import "./assets/css/index.scss";

import routes from "~react-pages";
import Layout from "./components/Layout";

const App = () => <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Layout>
      <App />
    </Layout>
  </Router>
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
