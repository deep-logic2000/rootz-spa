import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../Pages/HomePage/HomePage";
import Mission from "../Pages/Mission/Mission";
import Places from "../Pages/Places/Places";
import Team from "../Pages/Team/Team";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-mission" element={<Mission />} />
      <Route path="/places" element={<Places />} />
      <Route path="/team" element={<Team />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default AppRoutes;
