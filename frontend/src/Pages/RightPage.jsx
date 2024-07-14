import { useContext } from "react";
import UserText from "../Components/RightComponent/UserText";
import UserTop from "../Components/RightComponent/UserTop";
import ThemeContext from "../context/ThemeProvider";
import Message from "../Components/RightComponent/Message";
function RightPage() {
  const { mode } = useContext(ThemeContext);

  return (
    <div
      className="h-screen w-full relative "
      style={
        mode == "light"
          ? { background: "url(./images/background.jpg)" }
          : { background: "url(./images/blackBackground.jpg)" }
      }
    >
      <UserTop />
      <Message />
      <UserText />
    </div>
  );
}

export default RightPage;
