import NavBar from "../components/NavBar";
import DashBoardSideBar from "../components/dashboard/DashBoardSideBar";
import { AuthLayout } from "../components/auth";
import DashBoardBottomBar from "../components/dashboard/DashBoardBottomBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "../app/slices/authSlice";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <div className="w-screen h-screen overflow-x-hidden text-white">
      <AuthLayout>
        <div className="relative w-full h-[7%] sm:h-[10%]">
          <NavBar />
        </div>
        <div className="flex w-full">
          <DashBoardSideBar />
          <div className="h-full p-4 w-full">
            <Outlet />
          </div>
        </div>
        <DashBoardBottomBar />
      </AuthLayout>
    </div>
  );
}

export default Dashboard;
