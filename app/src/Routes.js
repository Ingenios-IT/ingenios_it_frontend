/** @format */

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/public/Landing";

function ROUTES() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ROUTES;
