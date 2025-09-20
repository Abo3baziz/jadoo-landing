import { Link } from "react-router";

function FooterLinks({ column }) {
  const { header, links } = column;
  return (
    <div>
      <p className="font-poppins mb-[35px] text-[21px] leading-[124.5%] font-bold">
        {header}
      </p>
      <span className="font-poppins flex flex-col gap-y-3 leading-[124.5%] font-medium text-[#5E6282]">
        {links.map((link, index) => (
          <Link to="fakeSocial" className="cursor-pointer" key={index}>
            {link}
          </Link>
        ))}
      </span>
    </div>
  );
}

export default FooterLinks;
