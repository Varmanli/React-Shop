import React from "react";

function Login({ setLoginHandler }) {
  return (
    <div className="flex flex-col items-start m-12 gap-5  border-2 border-[#262626] rounded-xl ">
      <div className="w-full mt-10">
        <h1 className="text-[#703BF7] text-center font-bold text-[30px]">
          Login
        </h1>
      </div>
      <form className="flex flex-col  justify-center items-center w-full">
        <div className="flex flex-col ">
          <label htmlFor="1" className="text-lg font-semibold">
            Email Addres
          </label>
          <input
            type="email"
            id="1"
            className="rounded-lg border w-[380px] md:w-[500px] py-3 text-black  border-[#262626] mb-5"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="2" className="text-lg font-semibold">
            Password
          </label>
          <input
            type="password"
            id="2"
            className="rounded-lg border w-[380px] md:w-[500px] py-3 text-black  border-[#262626] "
          />
        </div>
      </form>
      <div className="flex flex-col items-center mb-10 mt-5 justify-center gap-5 w-full">
        <button className="rounded-lg text-white py-4 w-[300px] border bg-[#703BF7] border-[#262626]">
          Login
        </button>
        <button
          className="rounded-lg py-4 w-[300px]  border border-[#262626] "
          onClick={() => setLoginHandler()}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
