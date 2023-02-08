import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={<div className="page-wrapper">{element}</div>}
          path={path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
