import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col pb-20 bg-white">
      <div className="flex flex-col justify-center items-end px-16 py-5 w-full text-4xl text-red-900 whitespace-nowrap bg-red-950 max-md:px-5 max-md:max-w-full">
        <div className="justify-center px-16 py-6 bg-lime-50 rounded-xl max-md:px-5">
          Login
        </div>
      </div>
      <div className="flex flex-col px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-6xl text-red-900 max-md:max-w-full max-md:text-4xl">
          Welcome to The Future SHE !
        </div>
        <div className="self-center mt-20 w-full max-w-[1246px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
              <div className="text-4xl text-black max-md:mt-10 max-md:max-w-full">
                We provide a platform for women mentoring women in tech to pave
                the way for a brighter, more inclusive future. We keep you
                updated on the internship and other exclusive opportunities for
                women.
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="w-full aspect-[1.69] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="self-end mt-20 text-4xl text-black w-[551px] max-md:mt-10 max-md:max-w-full">
          login to be a part of this growing community
        </div>
      </div>
    </div>
  );
}

