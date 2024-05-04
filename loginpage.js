import * as React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 py-11 text-4xl font-semibold text-black whitespace-nowrap bg-stone-400 max-w-[818px] max-md:px-5">
      <div className="flex flex-col w-full max-w-[559px] max-md:max-w-full">
        <div className="text-center max-md:max-w-full">Email</div>
        <div className="shrink-0 mt-3 bg-white h-[79px] max-md:max-w-full" />
        <div className="mt-14 text-center max-md:mt-10 max-md:max-w-full">
          Password
        </div>
        <div className="shrink-0 mt-5 bg-white h-[79px] max-md:max-w-full" />
        <div className="justify-center items-start self-center px-14 py-6 mt-16 max-w-full text-red-900 bg-lime-50 rounded-xl w-[215px] max-md:px-5 max-md:mt-10">
          Login
        </div>
      </div>
    </div>
  );
}

