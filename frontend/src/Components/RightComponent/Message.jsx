const messages = [
  {
    message: "Hello, how are you?",
    flag: true,
  },
  {
    message: "I'm doing great, thanks!",
    flag: false,
  },
  {
    message: "What are you up to today?",
    flag: true,
  },
  {
    message: "Just working on some code.",
    flag: false,
  },
  {
    message: "That sounds interesting!",
    flag: true,
  },
  {
    message: "Yes, it's quite challenging.",
    flag: false,
  },
  {
    message: "Do you need any help?",
    flag: true,
  },
  {
    message: "Thanks, but I think I got it.",
    flag: false,
  },
  {
    message: "Let me know if you change your mind.",
    flag: true,
  },
  {
    message: "Will do, thanks!",
    flag: false,
  },
];

function Message() {
  return (
    // <div className="m-4 mb-10 bg-white h-full w-full ">
    <div className=" h-[83.2%] px-4 overflow-y-auto relative overflow-x-hidden">
      <div className="absolute flex flex-col bottom-0 w-full">
        {messages.map((el, index) => (
          <div
            key={index}
            className={` message my-5 ${
              el.flag ? " self-start" : "self-end m-6"
            }`}
          >
            {el.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Message;
