import sendIcon from "../assets/svgs/Send-2.svg";
function NewsLetter() {
  return (
    <article className="mt-[110px] flex items-center justify-center">
      <div className="relative rounded-[20px] rounded-tl-[129px] bg-[#DFD7F9] px-[155px] py-[80px]">
        <img
          src={sendIcon}
          alt="send icon"
          className="absolute -top-5 -right-5 size-[70px]"
        />
        <p className="font-poppins mb-[75px] text-center text-[33px] leading-[54px] font-semibold text-[#5E6282]">
          Subscribe to get information, latest news and other <br /> interesting
          offers about Jadoo
        </p>
        <div className="relative flex justify-center gap-x-[25px]">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="You email"
            className="h-[70px] w-[420px] rounded-[10px] bg-white bg-[url('/email-icon.svg')] bg-[left_10px_center] bg-no-repeat py-[25px] pl-[60px]"
          />
          <svg
            className="absolute top-[25px] left-35 size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
            />
          </svg>

          <button className="font-condensed h-[4.25rem] w-[11.25rem] cursor-pointer rounded-[10px] bg-gradient-to-b from-[#FF946D] to-[#FF7D68] px-[3.125rem] py-[1.25rem] font-semibold text-white">
            Subscribe
          </button>
        </div>
      </div>
    </article>
  );
}

export default NewsLetter;
