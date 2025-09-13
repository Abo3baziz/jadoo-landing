import decore from "../assets/svgs/Decore-2.svg";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <div className="pb-[5rem] px-[8.75rem] relative">
        <img
          src={decore}
          alt="decore"
          className="absolute top-0 right-0 size-150 -z-1"
        />

        <NavBar />
      </div>
    </>
  );
}

export default Home;
