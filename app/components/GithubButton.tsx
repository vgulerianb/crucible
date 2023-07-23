export const GithubButton = () => {
  return (
    <button
      onClick={() => {
        const git = "https://github.com/vgulerianb/crucible";
        const a = document.createElement("a");
        a.setAttribute("href", git);
        a.setAttribute("target", "_blank");
        a.setAttribute("hidden", "true");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }}
      className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500  mr-2 mb-2"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-4 h-4 mr-2"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 .333A9.911 9.911 0 006.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 00-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 011.518 1.021 2.11 2.11 0 002.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 014.7 7.068a3.56 3.56 0 01.095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 014.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 011.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 01.673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0010 .333z"
          clipRule="evenodd"
        ></path>
      </svg>
        Star ⭐ Github
    </button>
  );
};
