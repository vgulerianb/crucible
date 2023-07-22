"use client";

const CopyComp = ({ text }: { text: string }) => {
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
      }}
      className="w-fit ml-auto border focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
    >
      Copy
    </button>
  );
};

export default CopyComp;
