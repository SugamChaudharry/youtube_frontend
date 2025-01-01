import { useSelector } from "react-redux";
import { selectActive } from "../app/slices/dashboard";
import { Link, Outlet } from "react-router-dom";
import { TbUpload, TbVideoPlus } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";
import { RiPlayListAddFill } from "react-icons/ri";
import { useState } from "react";
import VideoPopUp from "../components/dashboard/VideoPopUp";
import PlaylistPopup from "../components/dashboard/PlaylistPopup";
const DashboardContent = () => {
  const active = useSelector(selectActive);
  const activeClass = " border-x-2 px-9 border-purple-400 bg-[#5e3f65b4] ";
  const [uploadPopup, setUploadPopup] = useState(false);
  const handleUploadPopup = () => setUploadPopup((i) => !i);
  const [showUploads, setShowUploads] = useState([1, 1, 1]);

  const [popUps, setPopups] = useState([0, 0, 0]);
  const handlePopUps = (index) => {
    const temp = [1, 1, 1];
    temp[(index + 1) % 3] = popUps[index] == 0 ? 0 : 1;
    temp[(index + 2) % 3] = popUps[index] == 0 ? 0 : 1;
    setShowUploads(temp);

    const newArray = [0, 0, 0];
    newArray[index] = popUps[index] == 1 ? 0 : 1;
    setPopups(newArray);
  };

  return (
    <div className="relative">
      <div className="flex justify-end sm:justify-between mb-10">
        <div className={`${uploadPopup && "hidden sm:block"}`}>
          <h1 className="font-bold text-xl">Channel content</h1>
          <p className="text-gray-200">
            Seamless Video Management, Elevated Results.
          </p>
        </div>
        <div className="relative mb-10 sm:mb-4">
          {uploadPopup && (
            <div className="absolute w-56 sm:w-80 min-h-10 right-40 flex flex-col gap-3 sm:right-52">
              {showUploads[0] == 1 && (
                <div
                  className="bg-[#4f4e4e7d] border-x-2 border-purple-400 w-full h-full flex items-center justify-center gap-4 py-1 "
                  onClick={() => handlePopUps(0)}
                >
                  {popUps[0] == 1 ? (
                    <span className="font-bold text-xl">X</span>
                  ) : (
                    <>
                      <TbUpload className="size-6 sm:size-7" /> Upload Video{" "}
                    </>
                  )}
                </div>
              )}
              {showUploads[1] == 1 && (
                <div
                  className="bg-[#4f4e4e7d] border-x-2 border-purple-400 w-full h-full flex items-center justify-center gap-4 py-1 "
                  onClick={() => handlePopUps(1)}
                >
                  {popUps[1] == 1 ? (
                    <span className="font-bold text-xl">X</span>
                  ) : (
                    <>
                      <RiPlayListAddFill className="size-6 sm:size-7" /> Create
                      Playlist{" "}
                    </>
                  )}
                </div>
              )}
              {showUploads[2] == 1 && (
                <div
                  className="bg-[#4f4e4e7d] border-x-2 border-purple-400 w-full h-full flex items-center justify-center gap-4 py-1 "
                  onClick={() => handlePopUps(2)}
                >
                  {popUps[2] == 1 ? (
                    <span className="font-bold text-xl">X</span>
                  ) : (
                    <>
                      <IoCreateOutline className="size-6 sm:size-7" /> Post
                      Tweet{" "}
                    </>
                  )}
                </div>
              )}
            </div>
          )}
          <button
            onClick={() => handleUploadPopup()}
            className="bg-[#ae7aff] text-[#4b4545] rounded-md shadow-[#998c8c7d] shadow-[5px_5px_#4f4e4e] active:shadow-none active:translate-x-1 active:translate-y-1  p-2 sm:mr-14 mt-4 flex font-bold text-lg sm:text-xl justify-center items-center gap-1"
          >
            Create <TbVideoPlus className=" size-8 sm:size-10" />
          </button>
        </div>
      </div>
      <div className="flex gap-4 sm:gap-10 font-bold text-xl overflow-x-auto">
        <Link to={"videos"}>
          <div className={`px-9 ${active[0] === 1 ? activeClass : ""}`}>
            Video
          </div>
        </Link>
        <Link to={"playlists"}>
          <div className={`px-9 ${active[1] === 1 ? activeClass : ""}`}>
            Playlist
          </div>
        </Link>
        <Link to={"tweets"}>
          <div className={`px-9 ${active[2] === 1 ? activeClass : ""}`}>
            Tweets
          </div>
        </Link>
      </div>
      {popUps[0] == 1 && (
        <div className="absolute mx-auto left-0 right-0 top-20 h-[60vh] sm:w-[70vw] sm:h-[75vh] bg-black border-2 border-white overflow-y-auto">
          <VideoPopUp />
        </div>
      )}
      {popUps[1] == 1 && (
        <div className="absolute mx-auto left-0 right-0 top-20 w-[80%] h-[75vh] bg-black border-2 border-white">
        <PlaylistPopup />
        </div>
      )}
      {popUps[2] == 1 && (
        <div className="absolute mx-auto bg-green-400 left-0 right-0 top-20 w-[80%] h-[75vh] bg-black border-2 border-white"></div>
      )}
      <div className="border-t-2 mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardContent;
