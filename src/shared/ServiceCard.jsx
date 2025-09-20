function ServiceCard({ heading, description, image, shadow = null }) {
  let cssClasses = "flex flex-col items-center text-center";

  if (shadow) {
    cssClasses =
      "flex flex-col items-center text-center rounded-[36px] shadow-[10px_18px_22px_10px_rgba(189,186,186,0.09)] pb-[45px] px-[40px] relative";
  }

  return (
    <div className={cssClasses}>
      <img src={image} alt="service image" className="mb-[30px] size-20" />
      <h1 className="font-condensed mb-[15px] text-[20px] font-semibold text-[#1E1D4C]">
        {heading}
      </h1>
      <p className="font-poppins w-[185px] justify-self-end leading-[26px] font-medium text-[#5E6282]">
        {description}
      </p>
      {/* TODO fix the stacking context */}
      {/* {shadow && (
        <div className="size-[100px] bg-[#DF6951] rounded-tl-[30px] rounded-br-[10px] absolute -bottom-10 -left-10 -z-10"></div>
      )} */}
    </div>
  );
}

export default ServiceCard;
