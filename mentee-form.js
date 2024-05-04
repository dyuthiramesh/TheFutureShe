import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col justify-center text-5xl text-black bg-white max-md:text-4xl">
      <div className="flex justify-center items-center px-16 py-20 w-full border-black border-solid border-[5px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <div className="flex flex-col items-center mt-1.5 mb-3.5 w-full max-w-[904px] max-md:max-w-full max-md:text-4xl">
          <div className="justify-center items-center self-stretch px-16 py-5 text-white rounded-xl bg-stone-400 max-md:px-5 max-md:max-w-full max-md:text-4xl">
            Choose one of the below
          </div>
          <div className="justify-center px-16 py-5 mt-20 w-72 max-w-full whitespace-nowrap rounded-xl bg-stone-400 max-md:pr-8 max-md:pl-5 max-md:mt-10 max-md:text-4xl">
            Mentor
          </div>
          <div className="justify-center px-14 py-5 mt-20 w-72 max-w-full whitespace-nowrap rounded-xl bg-stone-400 max-md:pr-7 max-md:pl-5 max-md:mt-10 max-md:text-4xl">
            Mentee
          </div>
        </div>
      </div>
    </div>
  );
}

