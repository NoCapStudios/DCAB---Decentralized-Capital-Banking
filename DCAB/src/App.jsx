import { Routes, Route } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { RevenueTracker } from "./pages/RevenueTracker";
import { RevenueLogger } from "./pages/RevenueLogger";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="revenue-tracker" element={<RevenueTracker />} />
      <Route path="revenue-logger" element={<RevenueLogger />} />
    </Routes>
  );
}

export default App;
