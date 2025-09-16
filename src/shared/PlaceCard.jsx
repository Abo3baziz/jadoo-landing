import formatPrice from "../utils/formatPrice";
import navigationIcon from "../assets/svgs/Vector.svg";

function PlaceCard({ data }) {
  const { location, price, tripDuration, image } = data;

  return (
    <div className="overflow-hidden rounded-[24px] mt-[3.75rem] w-[315px] shadow-lg">
      <img className="w-[314px] h-[457px]" src={image.src} alt={image.alt} />
      <div className="pt-[20px] pl-[20px] pr-[25px] pb-[40px] font-poppins font-medium text-[#5E6282]">
        <span className="flex justify-between text-[18px] mb-[15px]">
          <p>{location}</p>
          <p>{formatPrice(price)}</p>
        </span>
        <span className="flex ">
          <img
            src={navigationIcon}
            alt="Navigation Icon"
            className="mr-[15px]"
          />
          <span>{tripDuration} </span>
          <span className="ml-[5px]"> Days Trip</span>
        </span>
      </div>
    </div>
  );
}

export default PlaceCard;
