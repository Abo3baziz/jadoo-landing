import { sponsers } from "../data/sponsers.js";
import SponserCard from "../shared/SponserCard";

function Sponsers() {
  return (
    <article className="flex gap-x-15 mt-[200px] justify-center">
      <ul className="flex justify-center items-center">
        {sponsers.map((sponser) => (
          <SponserCard image={sponser} />
        ))}
      </ul>
    </article>
  );
}

export default Sponsers;
