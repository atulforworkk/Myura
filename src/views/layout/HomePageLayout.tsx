import { Outlet } from "react-router-dom";

type Props = {};

const HomePageLayout = (props: Props) => {
  return (
    <div className="flex h-screen ">

     <Outlet />
    </div>
  );
};

export default HomePageLayout;
