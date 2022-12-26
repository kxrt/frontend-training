import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Feedback from "./pages/feedback/Feedback";
import Order from "./pages/order-summary/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/order-summary" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
