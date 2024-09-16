import React from "react";

function SignUp({ setLoginHandler }) {
  return (
    <div className="flex flex-col items-start m-12 gap-5 border-2 border-[#262626] rounded-xl">
      <div className="w-full mt-10">
        <h1 className="text-[#703BF7] text-center font-bold text-[30px]">
          Sign Up
        </h1>
      </div>
      <form className="flex flex-col gap-4 justify-center items-center w-full">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col ">
            <label htmlFor="1" className="text-lg font-semibold">
              First Name
            </label>
            <input
              type="text"
              id="1"
              className="rounded-lg text-black border w-[380px] md:w-[500px] py-3 border-[#262626] "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="2" className="text-lg font-semibold">
              Last Name
            </label>
            <input
              type="text"
              id="2"
              className="rounded-lg text-black border w-[380px] md:w-[500px] py-3 border-[#262626]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col ">
            <label htmlFor="1" className="text-lg font-semibold">
              Email Addres
            </label>
            <input
              type="email"
              id="1"
              className="rounded-lg text-black border w-[380px] md:w-[500px] py-3  border-[#262626]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="2" className="text-lg font-semibold">
              Password
            </label>
            <input
              type="password"
              id="2"
              className="rounded-lg text-black border w-[380px] md:w-[500px] py-3  border-[#262626]"
            />
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center mb-10 mt-5 justify-center gap-5 w-full">
        <button className="rounded-lg text-white py-4 w-[300px] border bg-[#703BF7] border-[#262626]">
          Sign Up
        </button>
        <button
          className="rounded-lg  py-4 w-[300px] border  border-[#262626]"
          onClick={() => setLoginHandler()}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default SignUp;
