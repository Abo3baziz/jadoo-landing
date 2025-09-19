import jadooLogo from "../assets/svgs/Jadoo..svg";
import FooterLinks from "../shared/FooterLinks";
import facebookLogo from "../assets/svgs/facebook.svg";
import instagramIcon from "../assets/svgs/instagram.svg";
import xIcon from "../assets/svgs/x.svg";
import { Link } from "react-router";

function Footer() {
  const linksData = [
    {
      header: "Company",
      links: ["About", "Careers", "Mobile"],
    },
    {
      header: "Contact",
      links: ["Help/FAQ", "Press", "Affilates"],
    },
    {
      header: "More",
      links: ["Airlinefees", "Airline", "Low fare tips"],
    },
  ];
  return (
    <footer className="flex flex-col items-center">
      <div className="grid grid-cols-5 mt-[200px] mb-[84px] justify-items-center">
        <div>
          <img src={jadooLogo} alt="jadoo logo" />
          <p className="font-medium font-poppins text-[13px] leading-[124.5%] text-[#5E6282] mt-[25px]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {linksData.map((column, index) => (
          <FooterLinks column={column} key={index} />
        ))}

        <div className="flex flex-col items-center gap-y-5">
          <div className="flex gap-x-5">
            <Link
              className="size-[40px] rounded-[50%] flex justify-center items-center"
              to="/fakeSocial"
            >
              <img src={facebookLogo} alt="facebook logo" />
            </Link>
            <Link
              className="size-[40px] rounded-[50%] flex justify-center items-center"
              to="/fakeSocial"
            >
              <img src={instagramIcon} alt="instagram logo" />
            </Link>
            <Link
              className="size-[40px] rounded-[50%] flex justify-center items-center"
              to="/fakeSocial"
            >
              {/* TODO P3 remove unwanted assets */}
              {/* TODO P1 change the color of the x logo to black and remove the circle from the social links */}
              <img src={xIcon} alt="x (twitter) logo" />
            </Link>
          </div>
          <div>
            <p className="font-poppins font-medium text-[#5E6282] leading-[124.5%] text-center text-[20px]">
              Discover our App
            </p>
            <div className="flex gap-x-4 mt-5">
              <button className="bg-[url(/images/GooglePlay.svg)] bg-contain bg-no-repeat w-[150px] h-[50px] cursor-pointer"></button>
              <button className="bg-[url(/images/PlayStore.svg)] bg-contain bg-no-repeat w-[150px] h-[50px] cursor-pointer"></button>
            </div>
          </div>
        </div>
      </div>
      <p className="font-medium font-poppins text-[14px] text-[#5E6282]">
        All rights reserved@jadoo.co
      </p>
    </footer>
  );
}

export default Footer;
