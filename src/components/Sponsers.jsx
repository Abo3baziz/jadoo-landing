import { sponsers } from "../data/sponsers.js";
import SponserCard from "../shared/SponserCard";

function Sponsers() {
  return (
    <article className="mt-[200px] flex justify-center gap-x-15">
      <ul className="flex items-center justify-center">
        {sponsers.map((sponser) => (
          <SponserCard sponser={sponser} key={sponser.alt} />
        ))}
      </ul>
    </article>
  );
}

export default Sponsers;
