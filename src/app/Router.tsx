import { BrowserRouter, Route, Routes } from "react-router-dom";
import Onboarding from "./routes/onboarding";
import Request from "./routes/request";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/request" element={<Request />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<>home</>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
