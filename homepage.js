import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col pb-20 bg-white">
      <div className="flex gap-5 pt-3.5 pr-9 pb-1.5 pl-20 w-full bg-red-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/257a0c0e791625c1f1dee6df5d37cda9d1f1a7da3d2679166101d865ecf162a5?"
          className="shrink-0 self-start aspect-[1.01] w-[95px]"
        />
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-5 justify-between items-start max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf5f023d9a5514baafa3fdf7c82725eeb8c62ca463fd23cb2c8a99f5c9c68834?"
                  className="shrink-0 max-w-full aspect-[1.22] w-[114px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f0a441533afe622ba90cf514eb0d4d53b75259d2e1fd2ac256c8f409d18b517?"
                  className="shrink-0 mt-1 max-w-full aspect-[1.15] w-[109px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/40dc26a17a3c20acfb2a15a757fb0ae679181a249a33f986963489c864c917f8?"
                  className="shrink-0 self-stretch my-auto max-w-full aspect-[1.2] w-[103px]"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 mt-1 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/752848de1698e15438c61ad988371af3f58d9d257b89424c5a804d4712d2ebf1?"
                  className="shrink-0 max-w-full aspect-[1.1] w-[111px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/522e80a427e24207f97bc015609bfb7f73c20d2503642922c9c0f1929c77205c?"
                  className="shrink-0 self-start aspect-[1.02] w-[90px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center self-center px-16 pt-9 pb-2 mt-11 max-w-full text-6xl text-white bg-stone-400 w-[1012px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Find your Mentor{" "}
      </div>
    </div>
  );
}

