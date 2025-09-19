function FooterLinks({ column }) {
  const { header, links } = column;
  return (
    <div>
      <p className="font-poppins font-bold text-[21px] leading-[124.5%] mb-[35px]">
        {header}
      </p>
      <span className="flex flex-col gap-y-3 font-poppins font-medium leading-[124.5%] text-[#5E6282]">
        {links.map((link, index) => (
          <p className="cursor-pointer" key={index}>
            {link}
          </p>
        ))}
      </span>
    </div>
  );
}

export default FooterLinks;
