import { Outlet } from "react-router-dom";
import { Navbar } from "./utils/Navbar";
import Footer from "./utils/Footer";
import Whatsaap from "./utils/Whatsapp";

function Root() {
  return (
    <>
      <div className=" w-full bg-[#FFFFE1] ">
        <Navbar />
        <Outlet />
        <Whatsaap />
        <Footer />
      </div>
    </>
  );
}

export default Root;
