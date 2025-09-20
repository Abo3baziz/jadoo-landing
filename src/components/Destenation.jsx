import PlaceCard from "../shared/PlaceCard";
import SectionHeading from "../shared/SectionHeading";
import SectionName from "../shared/SectionName";
import rome from "../assets/images/rome.jpg";
import london from "../assets/images/tower-clock.jpg";
import europe from "../assets/images/europe.jpg";

function Destenation() {
  const places = [
    {
      location: "Rome, Italy",
      price: 5420,
      tripDuration: 10,
      image: { src: rome, alt: "image of colosseum" },
    },
    {
      location: "London, UK",
      price: 4200,
      tripDuration: 12,
      image: {
        src: london,
        alt: "image of the Great Bell of the Great Clock of Westminster 'big ben'",
      },
    },
    {
      location: "Full Europe",
      price: 15000,
      tripDuration: 28,
      image: { src: europe, alt: "image of historical monument in europe" },
    },
  ];
  return (
    <article className="mt-35 flex flex-col items-center">
      <SectionName text="Top Selling" />
      <SectionHeading text="Top Destinations" />
      <ul className="flex gap-x-[3.75rem]">
        {places.map((place, index) => (
          <li key={index}>
            <PlaceCard data={place} />
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Destenation;
