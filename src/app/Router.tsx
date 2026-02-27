import { BrowserRouter, Route, Routes } from "react-router-dom";
import Onboarding from "./routes/onboarding";
import Request from "./routes/request";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
