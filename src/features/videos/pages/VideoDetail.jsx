import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideoById, getVideoLike, likeVideo, selectLiked, selectVideoLike, selectVideoPlay } from "../slice/videoSlice";
import { BiLike, BiSolidLike } from "react-icons/bi";
function VideoDetail() {
  const dispatch = useDispatch();
  const video = useSelector(selectVideoPlay);
  const videoLike = useSelector(selectVideoLike);
  const liked = useSelector(selectLiked);
  const { videoId } = useParams();
  useEffect(() => {
    if (videoId) {
      dispatch(getVideoById({ videoId }));
      dispatch(getVideoLike({ videoId }));
    }
  }, [dispatch, videoId]);
  const handleLike = async (e) => {
    e.preventDefault();
    if(videoId){
      const response = await dispatch(likeVideo({ videoId }))
      if(response.type === "likeVideo/fulfilled")
        dispatch(getVideoLike({ videoId }));
    }
  };
  return (
    <div className="w-full h-full p-4 text-white">
      <div className="w-[70%]">
        <video
          src={video.videoFile}
          controls
          className="w-[70rem] h-[30rem]"
        ></video>
        <div className="border-2 rounded-t-xl p-4">
          <div className="w-full flex justify-between">
            <div>
              <h1>{video.title}</h1>
              <p className="text-gray-300 text-sm">{video.views} views</p>
            </div>
            <div
              className="border-2 rounded-lg p-1 px-6 h-[50%] flex justify-between gap-2 items-center select-none"
              onClick={(e) => handleLike(e)}
            >
              <span className="border-r-2 items-center pr-3">
                {liked ? <BiSolidLike className="size-5"/> : <BiLike className="size-5" />}
              </span>
              <span>{videoLike}</span>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex gap-4">
              <img src={video?.owner?.avatar} className="size-10 rounded-full" />
              <div>
                <h1>{video?.owner?.fullName}</h1>
                <h2 className="text-gray-500 text-sm">243k subscribers</h2>
              </div>
            </div>
            <div className="w-28 py-2 bg-[#ae7aff] text-black font-bold shadow-[5px_5px_#4f4e4e] active:shadow-none active:translate-x-1 active:translate-y-1 flex flex-col text-center justify-center ">
              Subscribe
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-[70%] border-2 rounded-b-xl p-2">
        <h1>{video?.description}</h1>
      </div>
    </div>
  );
}

export default VideoDetail;
