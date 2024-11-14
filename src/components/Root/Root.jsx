import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
