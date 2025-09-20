import formatPrice from "../utils/formatPrice";
import navigationIcon from "../assets/svgs/Vector.svg";

function PlaceCard({ data }) {
  const { location, price, tripDuration, image } = data;

  return (
    <div className="mt-[3.75rem] w-[315px] overflow-hidden rounded-[24px] shadow-lg">
      <img className="h-[457px] w-[314px]" src={image.src} alt={image.alt} />
      <div className="font-poppins pt-[20px] pr-[25px] pb-[40px] pl-[20px] font-medium text-[#5E6282]">
        <span className="mb-[15px] flex justify-between text-[18px]">
          <p>{location}</p>
          <p>{formatPrice(price)}</p>
        </span>
        <span className="flex">
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
