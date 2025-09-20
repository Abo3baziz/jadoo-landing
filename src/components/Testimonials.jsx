import SectionHeading from "../shared/SectionHeading.jsx";
import SectionName from "../shared/SectionName.jsx";
import TestimonialsCard from "../shared/TestimonialsCard.jsx";

function Testimonials() {
  return (
    <article className="mt-[200px] grid grid-cols-2 justify-items-center">
      <div className="w-[500px]">
        <SectionName text="Testimonials" uppercase />
        <SectionHeading text="What People Say About Us." />
      </div>
      <TestimonialsCard />
    </article>
  );
}

export default Testimonials;
