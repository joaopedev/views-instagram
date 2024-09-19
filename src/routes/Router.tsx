import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const AppRoutes: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />} /> */}
        <Route path="/home" element={<Navigate to="/home" replace />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
