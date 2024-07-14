import { useContext, useRef, useState } from "react";
import ThemeContext from "../../context/ThemeProvider";
import EmojiPicker from "emoji-picker-react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

function UserText() {
  const { mode } = useContext(ThemeContext);
  const [reactions, openReactions] = useState(false);
  const [message, setMessage] = useState("");
  const {
    startRecording,
    stopRecording,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder,
  } = useAudioRecorder();
  const [audioFlag, setAudioFlag] = useState(false);
  const audioRef = useRef();

  function handleAudio() {
    if (audioFlag == false) {
      startRecording();
      setAudioFlag(true);
      audioRef.current.style.backgroundColor = "red";
    } else {
      stopRecording();
      setAudioFlag(false);
      audioRef.current.style.backgroundColor = "";
    }
  }

  return (
    <div>
      {/* <div
        className={`px-3 py-3 absolute w-full bottom-0 flex ${
          mode == "light" ? "bg-[#f1f3f5] " : "bg-[#131B20] text-white "
        }`}
      > */}
      <div
        className={` py-3 relative w-full flex ${
          mode == "light" ? "bg-[#f1f3f5] " : "bg-[#131B20] text-white "
        }`}
      >
        {reactions == true && (
          <div className="fixed bottom-20">
            <div>
              <EmojiPicker
                height={400}
                onEmojiClick={(emojiData, event) =>
                  setMessage((state) => state + emojiData.emoji)
                }
              />
            </div>
          </div>
        )}
        <div className="flex flex-grow w-full ml-2">
          <div className=" w-[10%] flex justify-between items-center ">
            <div
              className={`fa-regular fa-face-smile text-xl rounded-full hover:bg-slate-200 py-2 px-3 ${
                mode == "light" ? "text-[#6B7C85]" : " text-[#B0BAC0] "
              }`}
              onClick={() => openReactions((state) => !state)}
            ></div>
            <div
              className={`fa-solid fa-paperclip text-lg rounded-full hover:bg-slate-200 py-[6px] px-3 ${
                mode == "light" ? "text-[#6B7C85]" : " text-[#B0BAC0] "
              }`}
            ></div>
          </div>
          <div className="relative w-[90%]">
            <input
              type="text"
              className={` ml-2 flex-grow rounded-md h-8 w-full outline-none pl-10 py-5 ${
                mode === "light"
                  ? "bg-white placeholder:text-[#6B7C85]"
                  : "bg-[#222C32] placeholder:text-[#8e8e8f]"
              }`}
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div
              className={`fa-solid fa-camera absolute left-5 top-3 z-10 ${
                mode == "light" ? "text-[#6B7C85]" : " text-[#B0BAC0] "
              }`}
            ></div>
          </div>
        </div>
        <div className="w-[10%]">
          <i
            className={`fa-solid fa-microphone ml-5 hover:bg-slate-200 py-3 px-[14px] rounded-full  ${
              mode == "light" ? "text-[#6B7C85]" : " text-[#B0BAC0] "
            }`}
            onClick={handleAudio}
            ref={audioRef}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default UserText;
