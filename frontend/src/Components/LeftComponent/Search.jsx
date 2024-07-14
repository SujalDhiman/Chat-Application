import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";
function Search() {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      className={` border-b border-slate-200 ${
        mode === "light" ? "bg-white" : "bg-[#131B20]"
      }`}
    >
      <div className="px-4 py-2 flex justify-between">
        <div className="relative">
          <input
            type="text"
            className={` rounded-md py-2 pl-12 placeholder:text-sm outline-none w-[310px] ${
              mode === "light"
                ? "bg-[#F0F2F5] placeholder:text-[#6B7C85]"
                : "bg-[#222C32] placeholder:text-[#89969F]"
            }`}
            placeholder="Search or start new chat"
          />
          <div className="absolute top-3 left-4">
            <i
              className={`fa-solid fa-magnifying-glass ${
                mode === "light" ? "text-[#6B7C85]" : "text-[#C6C6C6]"
              }`}
            ></i>
          </div>
        </div>
        <div>
          <div
            className={`fa-solid fa-bars mt-3 pr-1 ${
              mode === "light" ? "text-[#6B7C85]" : "text-[#C6C6C6]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Search;
