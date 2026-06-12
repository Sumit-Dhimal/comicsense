import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      
    </>
  );
};

export default App;
