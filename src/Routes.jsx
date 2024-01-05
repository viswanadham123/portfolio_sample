import NotFound from "pages/NotFound";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const Projectsandfooter = React.lazy(() => import("pages/Projectsandfooter"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Projectsandfooter />} />
          <Route path="*" element={<NotFound />} />
      
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
