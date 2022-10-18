import { Navigate, Outlet } from "react-router-dom";
import { validateJWTs } from "../../utils/validateJWTs";

import React, { useEffect, useState } from "react";

export const PrivateRoutes = () => {
  return validateJWTs() ? <Outlet /> : <Navigate to="/login" />;
};
