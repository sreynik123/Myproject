import { Outlet } from "react-router";
import AppNavbar from "../component/AppNavbar";
import CardRightSide from "../component/CardRightSide";
import AppFooter from "../component/AppFooter";

export default function Mainlayout() {
  return (
    <>
      <AppNavbar />
      <div className="grid grid-col-12">
        <div className="col-span-8">
          <Outlet />
        </div>
        <div className="col-span-4">
          <CardRightSide/>
        </div>
      </div>
      <AppFooter/>
    </>
  );
}
