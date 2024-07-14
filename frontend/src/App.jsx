import { useEffect, useState } from "react";
import LeftPage from "./Pages/LeftPage";
import RightPage from "./Pages/RightPage";
import "./App.css";
function App() {
  const [flash, setFlash] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFlash(true);
    }, 3000);
  }, []);
  return (
    <div>
      {!flash ? (
        <div className=" h-full w-full">
          <img
            src="./images/flash.jpeg"
            className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
          />
        </div>
      ) : (
        <div className="flex flex-row overflow-hidden">
          <LeftPage />
          <RightPage />
        </div>
      )}
    </div>
  );
}

export default App;
