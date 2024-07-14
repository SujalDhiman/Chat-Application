import { useState } from "react";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" grid grid-cols-2 bg-gradient-to-r from-sky-300 to-sky-100 select-none">
      <div className="h-screen w-[70%]  flex justify-center items-center">
        <div className=" max-w-[500px]">
          <div>
            <p className="text-4xl font-extrabold">Welcome Back !</p>
            <p className=" font-thin">Enter your credentials to login</p>
          </div>
          <div className="mt-14">
            <form>
              <div className="flex flex-col gap-2">
                <label htmlFor="username">
                  Username <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="py-3 px-3 rounded-lg outline-none"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className=" flex flex-col gap-2 mt-4">
                <label htmlFor="password">
                  Password <span className="text-red-600">*</span>
                </label>
                <div className="w-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="py-3 px-3 rounded-lg outline-none w-full pr-12"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute z-10 right-4 top-4"
                  >
                    {showPassword ? (
                      <i className="fa-regular fa-eye-slash"></i>
                    ) : (
                      <i className="fa-regular fa-eye"></i>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-8 w-full bg-blue-500 py-3 rounded-md text-white flex justify-center text-xl">
            Log In
          </div>
          <div className="text-sm mt-8 flex justify-center items-center">
            Don't have an Account!
            <p className=" underline underline-offset-1 under pl-2 text-lg text-blue-500 cursor-pointer">
              Register
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen w-full ">
        <div className=" flex items-center justify-center h-full">
          <img src="./images/login.gif" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
