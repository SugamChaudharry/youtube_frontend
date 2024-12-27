import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "./app/slices/authSlice";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="relative w-full h-[10%]">
        <NavBar />
      </div>
      <div className="h-[90%] flex w-full">
        <div className="relative w-[20%] h-full">
          <SideBar />
        </div>
        <div className="w-[80%] h-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
