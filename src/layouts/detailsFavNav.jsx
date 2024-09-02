import { Outlet } from "react-router-dom";
import SecondNav from "../components/secondNav";
const OtherNav = () => {
  return (
    <>
      <SecondNav />
      <Outlet />
    </>
  );
};

export default OtherNav;
