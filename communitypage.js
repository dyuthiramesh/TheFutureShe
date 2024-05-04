import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col pb-20 bg-white">
      <div className="flex gap-5 px-14 pt-3.5 pb-1.5 w-full bg-red-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/faef91ece89553e9f3bbb2395e60d71c59ac60e001f52c152983e5ab3001a287?"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bf1cdfcdb96d31805f10c946df89e00739f40b64815e0ae9ea932cf46528f8f?"
                  className="shrink-0 mt-1 max-w-full aspect-[1.15] w-[109px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdca8dd8e808390144659757e30bf04bc2b071e089e0cf2cda0ddc0b606d5c49?"
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
      <div className="flex flex-col self-center px-5 mt-11 w-full max-w-[1045px] max-md:mt-10 max-md:max-w-full">
        <div className="justify-center items-center self-center px-16 py-6 w-full text-6xl text-white bg-stone-400 max-md:px-5 max-md:max-w-full max-md:text-4xl">
          Join our Community
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4c0209c1fd4c34e07c322a4160feb48e60515f4915a90bce3390a3ea319d656?"
          className="mt-16 ml-5 max-w-full aspect-[4.35] w-[498px] max-md:mt-10"
        />
        <div className="mt-14 text-4xl text-black max-md:mt-10 max-md:max-w-full">
          Join out slack community to get one on one mentorship{" "}
        </div>
      </div>
    </div>
  );
}

