import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MembersTableSkeleton } from "./components/profile_id/forum_skeleton/MemberTable.jsx";

const root = createRoot(document.getElementById("root"));

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/boost-forum",
    element: <MembersTableSkeleton />,
  },
  {
    path: "*",
    element: <App />,
  },
];

root.render(
  <HashRouter>
    <Routes>
      {routes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} />
      ))}
    </Routes>
  </HashRouter>
);
