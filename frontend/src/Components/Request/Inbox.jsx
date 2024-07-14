import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Inbox({ setshowInboxSlide }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Sent", content: <Sent /> },
    { id: 1, label: "Received", content: <Received /> },
  ];

  return (
    <div className="absolute h-screen w-full z-10">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Request Panel</h2>
        <i
          className="fa-solid fa-times cursor-pointer hover:rotate-[95deg] duration-700 text-xl"
          onClick={() => setshowInboxSlide(false)}
        ></i>
      </div>
      <div className="relative">
        <div className="tabs flex justify-around mb-4 text-xl font-semibold">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer ${
                activeTab === tab.id ? "text-green-400" : ""
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <motion.div
          className="absolute bottom-0 h-2 bg-green-400"
          initial={{ x: 0 }}
          animate={{ x: activeTab * 100 + "%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ width: "50%" }}
        />
      </div>
      <div className="content relative h-full overflow-hidden">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ x: activeTab === 0 ? "-100%" : "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: activeTab === 0 ? "-100%" : "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0 p-4"
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Sent() {
  return (
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
              <div className="cursor-pointer min-w-32 bg-red-500 shadow-md rounded-lg flex items-center justify-center text-white font-semibold h-8">
                Cancel Request
              </div>
            </div>
          </li>
          <div className="border-b border-slate-400 h-[2px] w-full mt-2"></div>
        </div>
      ))}
    </div>
  );
}

function Received() {
  return (
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
              <div className="flex w-[180px] mr-6 justify-between h-[50px] items-center text-white">
                <div className=" rounded-full p-[12px] bg-green-400 w-10 h-10 cursor-pointer">
                  <i className="fa-solid fa-check "></i>
                </div>
                <div className=" rounded-full p-[12px] bg-red-500 w-10 h-10 cursor-pointer">
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>
          </li>
          <div className="border-b border-slate-400 h-[2px] w-full mt-2"></div>
        </div>
      ))}
    </div>
  );
}

export default Inbox;
