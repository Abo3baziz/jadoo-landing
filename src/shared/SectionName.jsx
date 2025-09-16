function SectionName({ text, uppercase }) {
  let cssClasses = "font-poppins font-semibold text-[#5E6282]";
  if (uppercase) {
    cssClasses = "uppercase font-poppins font-semibold text-[#5E6282]";
  }

  return <p className={cssClasses}>{text}</p>;
}

export default SectionName;
