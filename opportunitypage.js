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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74aab45aae192c9d198e7402db287aae033a0d52ecda0c55d724b91b7e2bab2b?"
                  className="shrink-0 max-w-full aspect-[1.22] w-[114px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f0a441533afe622ba90cf514eb0d4d53b75259d2e1fd2ac256c8f409d18b517?"
                  className="shrink-0 mt-1 max-w-full aspect-[1.15] w-[109px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcc1393bd4cd6a39a1bf7e9ac19a321bc9596cb81ec28b9e655f42a43a85a912?"
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
      <div className="justify-center items-center self-center px-16 py-6 mt-11 w-full text-6xl text-white whitespace-nowrap bg-stone-400 max-w-[985px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Internships/Opportunities
      </div>
    </div>
  );
}

