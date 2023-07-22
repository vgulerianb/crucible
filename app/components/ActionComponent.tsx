export const ActionComponent = () => {
  return (
    <div className="animate-fadeIn max-w-[600px] w-full bg-[#191724] rounded-md flex flex-col gap-[16px] p-[16px]">
      <span className="text-sm cursor-pointer font-thin">{`<- Go Back`}</span>
      <span className="">What would you like to do with this video?</span>
      <div className="flex flex-col gap-[8px]">
        <button
          type="button"
          className="border  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
        >
          Generate twitter thread
        </button>
        <button
          type="button"
          className="border  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
        >
          Generate a blog post
        </button>
        <button
          type="button"
          className="border  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
        >
          Chat with it
        </button>
      </div>

      <button
        type="button"
        className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Generate
      </button>
    </div>
  );
};
