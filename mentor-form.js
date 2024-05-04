import * as React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 py-10 bg-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1329px] max-md:max-w-full">
        <div className="flex gap-5 items-start text-4xl text-black max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto self-end mt-10">Enter Name</div>
          <div className="shrink-0 self-start max-w-full bg-stone-300 h-[60px] w-[865px]" />
        </div>
        <div className="flex gap-5 items-start mt-2.5 text-4xl text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto self-end mt-10">Domain</div>
          <div className="shrink-0 self-start max-w-full bg-stone-300 h-[60px] w-[865px]" />
        </div>
        <div className="mt-3.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-10 text-4xl text-black">
                <div>Company name</div>
                <div className="mt-8">Accomplishments</div>
                <div className="mt-9">Slack account URL</div>
                <div className="mt-24 max-md:mt-10">upload picture</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-4xl text-red-900 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                <div className="shrink-0 bg-stone-300 h-[60px] max-md:max-w-full" />
                <div className="shrink-0 mt-6 bg-stone-300 h-[60px] max-md:max-w-full" />
                <div className="shrink-0 mt-6 bg-stone-300 h-[60px] max-md:max-w-full" />
                <div className="flex gap-5 justify-between mt-10 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="shrink-0 w-80 max-w-full bg-stone-300 h-[272px]" />
                  <div className="justify-center items-center self-end px-16 py-4 mt-52 bg-lime-50 rounded-xl max-md:px-5 max-md:mt-10">
                    Submit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

