import { Routes, Route, BrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { GetStarted } from "./pages/GetStarted/GetStarted";
import { UserPanel } from "./pages/UserPanel";
import { RevenueTracker } from "./pages/RevenueTracker";
import { RevenueLogger } from "./pages/RevenueLogger";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="get-started" element={<GetStarted />} />
        <Route path="user-panel" element={<UserPanel />} />
        <Route path="revenue-tracker" element={<RevenueTracker />} />
        <Route path="revenue-logger" element={<RevenueLogger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
