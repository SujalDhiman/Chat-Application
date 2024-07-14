import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeContext from "../../context/ThemeProvider";
import Inbox from "../Request/Inbox";
import Request from "../Request/Request";

function Upper() {
  const { mode } = useContext(ThemeContext);
  const [showInboxSlide, setshowInboxSlide] = useState(false);
  const [showRequestSlide, setshowRequestSlide] = useState(false);
  return (
    <div className={`${mode === "light" ? "bg-[#F0F2F5]" : "bg-[#222C32]"}`}>
      <div className="px-4 py-2">
        <div
          className={`${
            mode === "light" ? "bg-white" : "bg-[#222C32]"
          } flex justify-between`}
        >
          <div className="h-max w-max">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="user"
              className="rounded-full h-10 w-10 object-cover p-1"
            />
          </div>
          <div
            className={`text-lg my-auto ${
              mode === "light" ? "text-[#54656F]" : "text-[#B0BAC0]"
            }`}
          >
            <i
              className="fa-solid fa-bell mr-6"
              onClick={() => setshowInboxSlide((state) => !state)}
            ></i>
            <i
              className="fa-solid fa-globe mr-6 cursor-pointer"
              onClick={() => setshowRequestSlide((prev) => !prev)}
            ></i>
            <i className="fa-solid fa-ellipsis-vertical mr-6"></i>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showInboxSlide && (
          <motion.div
            className={`absolute top-0 left-0 w-full h-screen z-10 ${
              mode === "light" ? "bg-white" : "bg-[#222C32]"
            } shadow-lg`}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="">
              <Inbox setshowInboxSlide={setshowInboxSlide} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showRequestSlide && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`absolute top-0 left-0 h-full w-full ${
              mode === "light" ? "bg-white" : "bg-[#222C32]"
            } shadow-lg z-20 p-4`}
          >
            <div>
              <Request setshowRequestSlide={setshowRequestSlide} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Upper;
