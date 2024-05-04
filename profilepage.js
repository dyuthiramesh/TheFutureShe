import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col pb-20 bg-white">
      <div className="flex gap-5 px-14 pt-3.5 pb-1.5 w-full bg-red-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a4daf5d154fdc2ced2176f0c56b09f00dd101fbe6d984a9d0c093eeda593cd8?"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ce2e7eb71c9ec00d6bbc6fa1ae12d30d7ac5530d0d84c338c8c369ef7feca05?"
                  className="shrink-0 mt-1 max-w-full aspect-[1.15] w-[109px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3319585339f5ef08586ce40541a6e7a42d068e065f5982f35bfc0c76e78c07c5?"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c14820f98182b81c563740f909d9ca2b7691ada2327a9a5fb8e215c3e80e1bd4?"
                  className="shrink-0 self-start aspect-[1.02] w-[90px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center self-center px-16 py-7 mt-10 max-w-full text-6xl text-white whitespace-nowrap bg-stone-400 w-[517px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
        Profile
      </div>
    </div>
  );
}

