import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feedback from "./pages/feedback/Feedback";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
