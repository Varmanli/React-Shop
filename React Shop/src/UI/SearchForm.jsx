import React from "react";
import { CiSearch } from "react-icons/ci";

function SearchForm() {
  return (
    <div className="flex items-center w-[95%] lg:w-[40%] mt-10 border border-[#262626] rounded-lg ml-4 after:border-[#8254F8] ">
      <div>
        <CiSearch className="bg-[#8254F8] m-2 text-[40px] p-2 rounded-lg" />
      </div>
      <form className="w-[400px]">
        <input type="text" placeholder="Search ..." className="bg-[#141414] w-[350px] focus:outline-none" />
      </form>
    </div>
  );
}

export default SearchForm;
