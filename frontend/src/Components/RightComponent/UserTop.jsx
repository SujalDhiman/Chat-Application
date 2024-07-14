import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";

function UserTop() {
  const { mode } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`px-6  py-2 flex justify-between ${
          mode === "light" ? "bg-[#F0F2F5]" : "bg-[#222C32]"
        }`}
      >
        <div className="flex">
          <div className="rounded-full h-10 w-10 border-2 border-white object-cover ">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" />
          </div>
          <div className=" ml-4 mt-2 font-medium">Jane Davis</div>
        </div>
        <div>
          <div
            className={`fa-solid fa-phone mr-6 mt-3 ${
              mode === "light" ? "text-[#6B7C85]" : "text-[#B0BAC0]"
            }`}
          ></div>
          <div
            className={`fa-solid fa-video text-[#6B7C85] mr-6 ${
              mode === "light" ? "text-[#6B7C85]" : "text-[#B0BAC0]"
            }`}
          ></div>
          <div
            className={`fa-solid fa-magnifying-glass mr-6 ${
              mode === "light" ? "text-[#6B7C85]" : "text-[#B0BAC0]"
            }`}
          ></div>
          <div
            className={`fa-solid fa-ellipsis-vertical mr-6 ${
              mode === "light" ? "text-[#6B7C85]" : "text-[#B0BAC0]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default UserTop;
