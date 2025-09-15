import ServiceCard from "../shared/ServiceCard";
import SectionHeading from "../shared/SectionHeading";
import SectionName from "../shared/SectionName";
import serviceOne from "../assets/svgs/service-1.svg";
import servicetwo from "../assets/svgs/service.svg";
import serviceThree from "../assets/svgs/service-3.svg";
import serviceFour from "../assets/svgs/service-4.svg";

const services = [
  {
    heading: "Calculated Weather ",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    image: serviceOne,
  },
  {
    heading: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    image: servicetwo,
  },
  {
    heading: "Local Events",
    description: `Barton vanity itself do in it. Preferd to men it engrossed listening. `,
    image: serviceThree,
  },
  {
    heading: "Customization",
    description:
      "We deliver outsourced aviation services for military customers",
    image: serviceFour,
  },
];

function Category() {
  return (
    <article className="flex flex-col items-center mt-25">
      <SectionName text="category" />
      <SectionHeading text="We Offer Best Services" />

      <div className="mt-[3.75rem]">
        <ul className="flex gap-x-20">
          <li>
            <ServiceCard
              heading={services[0].heading}
              description={services[0].description}
              image={services[0].image}
            />
          </li>
          <li>
            <ServiceCard
              heading={services[1].heading}
              description={services[1].description}
              image={services[1].image}
              shadow
            />
          </li>
          <li>
            <ServiceCard
              heading={services[2].heading}
              description={services[2].description}
              image={services[2].image}
            />
          </li>
          <li>
            <ServiceCard
              heading={services[3].heading}
              description={services[3].description}
              image={services[3].image}
            />
          </li>
        </ul>
        {/* <ul className="flex">
          {services.map((service, index) => (
            <ServiceCard
              heading={service.heading}
              description={service.description}
              image={service.image}
              key={index}
            />
          ))}
        </ul> */}
      </div>
    </article>
  );
}

export default Category;
