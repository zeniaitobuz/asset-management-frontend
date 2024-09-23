import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" Component={Login} />
        <Route path="/" Component={Dashboard} />
      </Routes>
    </BrowserRouter>
  );
}
