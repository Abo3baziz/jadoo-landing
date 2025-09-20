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
import Footer from "../components/Footer";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="relative px-[8.75rem] pb-[5rem]">
        <img
          src={decore}
          alt="decore"
          className="absolute top-0 right-0 -z-1 size-200"
        />

        <NavBar />

        <div className="grid-col-2 grid grid-flow-col">
          <div className="mt-16 -mr-[10rem]">
            <p className="font-poppins text-var-orange-500 text-[1.25rem] font-bold uppercase">
              Best Destinations around the world
            </p>
            <div className="font-volkhov text-var-purple-900 w-fit text-[5.25rem] tracking-tight">
              Travel,{" "}
              <p className="relative inline">
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
            <p className="font-poppins mb-10 font-medium text-[#5E6282]">
              Built Wicket longer admire do barton vanity itself do in it.{" "}
              <br />
              Preferred to sportsmen it engrossed listening. Park gate <br />{" "}
              sell they west hard for the.
            </p>
            <div className="flex">
              <Link
                to="fakeSocial"
                className="mr-10 flex h-[60px] w-[170px] items-center justify-center rounded-[10px] bg-[#F1A501] text-white"
              >
                Find out more
              </Link>

              <div className="flex items-center gap-x-5">
                <button>
                  <img
                    className="size-[52px]"
                    src={playButton}
                    alt="play button icon"
                  />
                </button>
                <p className="font-poppins font-medium text-[#686D77]">
                  Play Demo
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="relative w-[55rem]"
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
        <Footer />
      </div>
    </>
  );
}

export default Home;
