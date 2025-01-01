import { useState } from "react";

const PlaylistPopup = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="">
      <div className="flex justify-between items-center border-b-2 p-4">
        <div>Upload video</div>
        <button className="bg-[#ae7aff] text-[#4b4545] shadow-[5px_5px_#4f4e4e] active:shadow-none active:translate-x-1 active:translate-y-1  py-2 px-4 font-bold text-lg sm:text-xl text-center gap-1">
          save
        </button>
      </div>
      <div className="">
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

export default PlaylistPopup;
