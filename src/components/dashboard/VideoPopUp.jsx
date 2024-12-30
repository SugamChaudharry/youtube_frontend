import { useState } from "react";

const VideoPopUp = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");

  const handleThumbnail = (e) => {}
  return (
    <div className="">
      <div className="flex justify-between items-center border-b-2 p-4">
        <div>Upload video</div>
        <button className="bg-[#ae7aff] text-[#4b4545] shadow-[5px_5px_#4f4e4e] active:shadow-none active:translate-x-1 active:translate-y-1  py-2 px-4 font-bold text-lg sm:text-xl text-center gap-1">
          save
        </button>
      </div>
      <div className="">
        <from className="h-[35vh] border-dashed border-2 m-4 sm:mx-32 flex items-center justify-center hover:bg-[#3b393982] pl-32">
          <input type="file" className="file:py-2 file:px-4 file:rounded file:bg-[#ae7aff] file:text-black file:font-semibold file:text-sm"/>
        </from>
        <div className="m-4 sm:mx-32">
          <h1>Thumbnail*</h1>
          <input type="file" className="border-2 p-2 w-full file:bg-[#ae7aff] file:p-2" />
        </div>
        <div className="m-4 sm:mx-32">
          <h1>Title*</h1>
          <input type="text" className="border-2 p-2 w-full bg-transparent" />
        </div>
        <div className="m-4 sm:mx-32">
          <h1>Description*</h1>
        <textarea rows={10} className="w-full bg-transparent border-2"></textarea>
        </div>
      </div>
    </div>
  );
};

export default VideoPopUp;
