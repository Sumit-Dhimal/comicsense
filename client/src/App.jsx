import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import RouteSpinner from "./components/ui/RouteSpinner";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {

  const location = useLocation();

  const hideLayout = 
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      <RouteSpinner />
      {!hideLayout && <Navbar />}
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
