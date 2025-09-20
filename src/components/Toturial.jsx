import SectionHeading from "../shared/SectionHeading";
import SectionName from "../shared/SectionName";
import iconA from "../assets/svgs/Group-1.svg";
import iconB from "../assets/svgs/Group-2.svg";
import iconC from "../assets/svgs/Group-3.svg";

function Toturial() {
  return (
    <article className="grid-col-2 mt-[11.875rem] grid grid-flow-col justify-items-center">
      <div>
        <div className="mb-[30px] w-[500px]">
          <SectionName text="Easy and Fast" />
          <SectionHeading text="Book Your Next Trip In 3 Easy Steps" />
        </div>
        <ul className="font-poppins flex flex-col gap-y-[48px] text-[#5E6282]">
          <li className="flex gap-x-5">
            <img src={iconA} alt="icon" />
            <span>
              <h4 className="font-bold">Choose Destination</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Urna, tortor tempus.
              </p>
            </span>
          </li>
          <li className="flex gap-x-5">
            <img src={iconB} alt="icon" />
            <span>
              <h4 className="font-bold">Make Payment</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Urna, tortor tempus.
              </p>
            </span>
          </li>
          <li className="flex gap-x-5">
            <img src={iconC} alt="icon" />
            <span>
              <h4 className="font-bold">Reach Airport on Selected Date</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Urna, tortor tempus.
              </p>
            </span>
          </li>
        </ul>
      </div>
      {/* TODO convert this image to component */}
      <div className="w-[500px] bg-[url(./images/Image.png)] bg-cover"></div>
    </article>
  );
}

export default Toturial;
