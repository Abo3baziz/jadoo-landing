import sendIcon from "../assets/svgs/Send-2.svg";
function NewsLetter() {
  return (
    <article className="flex justify-center items-center mt-[110px]">
      <div className="rounded-[20px] rounded-tl-[129px] bg-[#DFD7F9] py-[80px] px-[155px] relative">
        <img
          src={sendIcon}
          alt="send icon"
          className="absolute size-[70px] -top-5 -right-5"
        />
        <p className="text-center font-poppins font-semibold text-[33px] leading-[54px] text-[#5E6282] mb-[75px]">
          Subscribe to get information, latest news and other <br /> interesting
          offers about Jadoo
        </p>
        <div className="flex gap-x-[25px] justify-center relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="You email"
            className="w-[420px] h-[70px] py-[25px] pl-[60px] rounded-[10px] bg-white bg-[url('/email-icon.svg')] bg-no-repeat bg-[left_10px_center]"
          />
          <svg
            className="absolute size-5 top-[25px] left-35"
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

          <button className="font-condensed text-white font-semibold px-[3.125rem] py-[1.25rem] bg-gradient-to-b from-[#FF946D] to-[#FF7D68] w-[11.25rem] h-[4.25rem] rounded-[10px] cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </article>
  );
}

export default NewsLetter;
