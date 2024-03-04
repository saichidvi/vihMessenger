import buttonStyler from "../images/design.svg";
import mobileScreenFilters from "../images/Filters.svg";
import mobileScreenPart from "../images/mobileScreenPart.svg";
import mobileScreenMainView from "../images/leftSideImageSVG.svg";
import mobileScreenMainview2 from "../images/frame2.svg";
import tick from "../images/tick.svg";
import { useState } from "react";

export default function Component2() {
  const [display, setDisplay] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setDisplay(!display);
  };
  console.log(display);
  return (
    <div className="flex flex-row font-rubik mt-10 items-center">
      <div className="w-3/4 mt-4">
        {display ? (
          <>
            {" "}
            <div>
              <img src={mobileScreenMainview2}></img>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="relative">
              <img
                className="absolute mt-16 ml-32 "
                src={mobileScreenFilters}
              ></img>
              <img src={mobileScreenMainView}></img>
              <img
                className="absolute -mt-44 ml-48 "
                src={mobileScreenPart}
              ></img>
            </div>
          </>
        )}
      </div>
      <div className="w-1/2 pb-40">
        {display ? (
          <>
            {" "}
            <h1 className="mt-20  text-btnEnd w-[400px] text-[24px]">
              REACH THEM WITHOUT HASSLESS
            </h1>
          </>
        ) : (
          <>
            {" "}
            <h1 className="mt-20  text-btnEnd w-[400px] text-[24px]">
              NEVER COMPROMISE ON SAFETY
            </h1>
          </>
        )}
        <h1 className="mt-0 w-[576px] text-[40px] font-semibold text-div2txtHeadClr">
          Build high-impact
        </h1>
        <h1 className="-mt-4 w-[576px] text-[40px] font-semibold text-div2txtHeadClr">
          conversational journeys
        </h1>
        <div
          className={`transition-height duration-500 ${
            display ? "h-[70px]" : "h-[60px]"
          }`}
        >
          {display ? (
            <div>
              {" "}
              <p className="w-[555px] text-[18px] font-normal text-div2txtClr">
                Only verified companies can use ViH. Deliver secure experiences
                with verified messaging, end-to-end encryption, brand logo and
                build trust.
              </p>
            </div>
          ) : (
            <div>
              {" "}
              <p className="w-[555px] text-[18px] font-normal text-div2txtClr">
                {" "}
                Messages from verified brands land straight into native
                messaging inbox. Get set for app-like experiences. No downloads
                required.
              </p>
            </div>
          )}
        </div>
        <ul className={`mt-6 text-div2txtHeadClr font-normal `}>
          {display ? (
            <>
              {" "}
              <li className="flex flex-row mt-2 transition-opacity duration-500">
                <div>
                  <div className="w-[16.7px] h-[16.7px] bg-gradient-to-r from-circleBign to-circleEnd rounded-full mr-2 mt-1"></div>
                  <img
                    className="absolute -ml-1 -mt-5"
                    src={tick}
                    alt="tick"
                  ></img>
                </div>
                <div className="w-[530px] text-[18px]">
                  Only verified companies can use ViiH.
                </div>
              </li>
              <li className="flex flex-row mt-2 transition-opacity duration-500">
                <div>
                  <div className="w-[16.7px] h-[16.7px] bg-gradient-to-r from-circleBign to-circleEnd rounded-full mr-2 mt-1"></div>
                  <img
                    className="absolute -ml-1 -mt-5"
                    src={tick}
                    alt="tick"
                  ></img>
                </div>
                <div className="w-[530px] text-[18px]">
                  Deliver secure experiences with verified messaging, end-to-end
                  encryption, brand logo and the build trust.
                </div>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className="flex flex-row mt-2 transition-opacity duration-500">
                <div>
                  <div className="w-[16.7px] h-[16.7px] bg-gradient-to-r from-circleBign to-circleEnd rounded-full mr-2 mt-1"></div>
                  <img
                    className="absolute -ml-1 -mt-5"
                    src={tick}
                    alt="tick"
                  ></img>
                </div>
                <div className="w-[530px] text-[18px]">
                  Messages from verified brands land straight into native
                  messaging inbox.
                </div>
              </li>
              <li className="flex flex-row mt-2 transition-opacity duration-500">
                <div>
                  <div className="w-[16.7px] h-[16.7px] bg-gradient-to-r from-circleBign to-circleEnd rounded-full mr-2 mt-1"></div>
                  <img
                    className="absolute -ml-1 -mt-5"
                    src={tick}
                    alt="tick"
                  ></img>
                </div>
                <div className="w-[530px] text-[18px]">
                  Get set for app-like experiences.
                </div>
              </li>
              <li className="flex flex-row mt-2 transition-opacity duration-500">
                <div>
                  <div className="w-[16.7px] h-[16.7px] bg-gradient-to-r from-circleBign to-circleEnd rounded-full mr-2 mt-1"></div>
                  <img
                    className="absolute -ml-1 -mt-5"
                    src={tick}
                    alt="tick"
                  ></img>
                </div>
                <div className="w-[530px] text-[18px]">
                  No downloads required.
                </div>
              </li>
            </>
          )}
        </ul>

        <img src={buttonStyler} className="absolute mt-5 ml-36"></img>
        <button
          className="cursor-pointer mt-10 bg-gradient-to-r from-btnStrt to-btnEnd px-[32px] py-[10px] text-white font-rubik shadow-md rounded-md"
          onClick={(e) => handleClick(e)}
        >
          <span className="h-10 m-4 mt-6">Lets Start</span>
        </button>
      </div>
    </div>
  );
}
