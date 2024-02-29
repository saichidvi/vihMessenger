import star from "../images/star.png";
import buttonDesigner from "../images/design.svg";
import boyAnimation from "../images/boyAnimie.svg";
import backgroundImage from "../images/background.png";

//Importing the icons of the various tele communication companies.
import jio from "../images/jio.svg";
import idea from "../images/idea.svg";
import telia from "../images/frame1.png";
import airtel from "../images/airtel.svg";
import reliance from "../images/reliance.svg";
import vodafone from "../images/vodafone.svg";

export default function Component1() {
  return (
    <>
      {" "}
      <div
        className="h-screen bg-cover font-rubik bg-slate-50 mt-6"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-row gap-10">
          <div className="w-2/3 mt-24 ">
            <div className="ml-10 font-rubik">
              <img src={star} className="absolute ml-28"></img>
              <h1 className="absolute  mt-10 font-normal text-[24px]">
                GAIN MORE ATTENTION
              </h1>
              <h1 className="absolute mt-16 text-[52px] font-bold w-[700px]">
                Empowering You Through
              </h1>
              <h1 className="absolute mt-32 text-[52px] font-bold w-[700px]">
                Conversation Via
              </h1>
              <h1 className="absolute mt-44 w-[402px] font-bold text-[65px] text-chatBotClr font-rubik">
                AI-Chatbots
              </h1>
              <div className="absolute ml-2 mt-72 w-[500px] text-[18px]">
                <p>Boost your conversations with automation and Ai</p>
                <p>Answer question in real time, 24/7.</p>
                <p>And so much more.</p>
              </div>
              <img
                src={buttonDesigner}
                className="absolute mt-[22rem] ml-48"
              ></img>
              <button className="cursor-pointer absolute ml-2 mt-96 bg-gradient-to-r from-btnStrt to-btnEnd px-[24px] py-[14px] text-white font-rubik shadow-lg bg-blue-500 rounded-lg ">
                <span className="h-10 m-4 mt-6">Book A Demo</span>
              </button>
            </div>
          </div>
          <div className="w-2/3 ml-20 pl-28">
            <img src={boyAnimation} className="max-w-min ml-4"></img>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <div className="bg-slate-50 rounded-md flex flex-row gap-[84px] p-[30px] shadow-md w-[1179px] h-[100px] mx-10">
          <img src={airtel} className="w-[125px] h-[50px]"></img>
          <img src={reliance} className="w-[125px] h-[50px]"></img>
          <img src={telia} className="w-[125px] h-[50px]"></img>
          <img src={vodafone} className="w-[130px] h-[55px]"></img>
          <img src={idea} className="w-[125px] h-[50px]"></img>
          <img src={jio} className="w-[125px] h-[50px]"></img>
        </div>
      </div>
    </>
  );
}
