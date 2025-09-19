import { useEffect, useState } from "react";
import avatar from "../assets/images/img_avatar.png";
import { clientsComments } from "../data/clientsComments";

export default function TestimonialsCard() {
  const [index, setIndex] = useState(0);
  // TODO add animation using motion
  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % clientsComments.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? clientsComments.length - 1 : prev - 1));
  };

  const { review, name, address } = clientsComments[index];

  return (
    <div className="flex flex-col relative w-[504px] h-[245px] rounded-[10px] pt-[28px] pl-[34px] pr-[68px] shadow-2xl">
      <img
        className="absolute size-[68px] rounded-[100%] -top-[35px] -left-[35px]"
        src={avatar}
        alt="image of client"
      />

      <q className="block font-poppins font-medium text-[#5E6282] leading-[32px]">
        {review}
      </q>

      <span className="mt-5">
        <p className="font-poppins font-semibold text-[#5E6282]">{name}</p>
        <p className="text-[14px] text-[#5E6282] font-medium">
          {address.country}, {address.state}
        </p>
      </span>
      <div className="absolute flex flex-col gap-y-5 top-[30px] -right-[45px]">
        <button className="cursor-pointer" onClick={prevTestimonial}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#BCB7C2"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 15l-7-7-7 7"
            />
          </svg>
        </button>
        <button className="cursor-pointer" onClick={nextTestimonial}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 9l7 7 7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
