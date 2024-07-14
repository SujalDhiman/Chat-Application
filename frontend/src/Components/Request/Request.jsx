function Request({ setshowRequestSlide }) {
  return (
    <div className="relative">
      <div>
        <i
          className="fa-solid fa-times cursor-pointer text-xl absolute right-4 hover:rotate-[92deg] duration-700"
          onClick={() => setshowRequestSlide(false)}
        ></i>
      </div>
      <div className="mt-12">
        <p className=" text-xl pb-4">Requests</p>
        <div className="h-[2px] w-full bg-slate-500 "></div>
      </div>
      <div className="mt-2">
        <input
          type="text"
          className="rounded-md py-2 pl-4 pr-4 placeholder:text-sm outline-none w-full bg-slate-200"
          placeholder="Enter Name"
        />
      </div>
      <div className=" h-[530px] mt-4 overflow-auto">
        <div className="grid grid-flow-row gap-4">
          {["Joe Doe", "James Adam", "Charlie James"].map((person) => (
            <div key={person}>
              <li className="flex items-center pl-2 py-1">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt={person}
                  className="rounded-full h-10 outline outline-2 outline-offset-2 outline-green-500 object-cover w-[11%]"
                />
                <div className="w-[85%] flex flex-grow justify-center items-center">
                  <div className=" h-[50px] ml-4 flex justify-between w-full  items-center">
                    <div>
                      <p className="text-sm font-medium ">{person}</p>
                    </div>
                  </div>
                  <div className="cursor-pointer min-w-32 bg-green-500 shadow-md rounded-lg flex items-center justify-center text-white font-semibold h-8">
                    Send Request
                  </div>
                </div>
              </li>
              <div className="border-b border-slate-400 h-[2px] w-full mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Request;
