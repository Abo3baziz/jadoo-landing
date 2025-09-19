import decore from "../assets/svgs/Decore-2.svg";
import NavBar from "../components/NavBar";
import travelar from "../assets/images/Traveller 1.png";
import playButton from "../assets/svgs/play-button.svg";
import underlineDecore from "../assets/svgs/Decore.svg";
import Category from "../components/Category";
import Destenation from "../components/Destenation";
import Toturial from "../components/Toturial";
import Testimonials from "../components/Testimonials";
import Sponsers from "../components/Sponsers";
import NewsLetter from "../components/NewsLetter";

function Home() {
  return (
    <>
      <div className="pb-[5rem] px-[8.75rem] relative">
        <img
          src={decore}
          alt="decore"
          className="absolute top-0 right-0 size-200 -z-1"
        />

        <NavBar />

        <div className="grid grid-flow-col grid-col-2">
          <div className="mt-16 -mr-[10rem]">
            <p className="font-poppins font-bold text-[1.25rem] uppercase text-var-orange-500">
              Best Destinations around the world
            </p>
            <div className="font-volkhov text-[5.25rem] text-var-purple-900 w-fit tracking-tight">
              Travel,{" "}
              <p className="inline relative">
                {/* 
                TODO change image to SVG componenet using svgr 
                TODO animate SVG
                */}
                <img
                  className="absolute top-22 left-0 -z-1"
                  src={underlineDecore}
                  alt="decore image"
                />{" "}
                enjoy
              </p>{" "}
              <br />
              and live a new <br /> and full life
            </div>
            <p className="font-poppins font-medium text-[#5E6282] mb-10">
              Built Wicket longer admire do barton vanity itself do in it.{" "}
              <br />
              Preferred to sportsmen it engrossed listening. Park gate <br />{" "}
              sell they west hard for the.
            </p>
            <div className="flex">
              <button className="bg-[#F1A501] text-white rounded-[10px] w-[170px] h-[60px] mr-10">
                Find out more
              </button>

              <div className="flex items-center gap-x-5">
                <button>
                  <img
                    className="size-[52px]"
                    src={playButton}
                    alt="play button icon"
                  />
                </button>
                <p className="text-[#686D77] font-poppins font-medium">
                  Play Demo
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[55rem] relative "
              src={travelar}
              alt="travelar image"
            />
          </div>
        </div>

        <Category />
        <Destenation />
        <Toturial />
        <Testimonials />
        <Sponsers />
        <NewsLetter />
      </div>
    </>
  );
}

export default Home;
