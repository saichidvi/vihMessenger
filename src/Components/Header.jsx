import headerIcn from "../images/headerIcon.jpeg";

export default function Header() {
  return (
    <div className="bg-slate-50">
      <div className="flex flex-row">
        <div className="w-5/12 mt-11">
          <img src={headerIcn} className="w-[250px] ml-12 text-sm"></img>
        </div>
        <div className="w-5/12 mt-12 ml-4 font-rubik">
          <ol className="flex flex-row ml-36 gap-8">
            <li className="cursor-pointer text-sm font-rubi">Home</li>
            <li className="pl-4 cursor-pointer text-sm font-rubik">About Us</li>
            <li className="pl-4 cursor-pointer text-sm font-rubik">Our Flow</li>
            <li className="pl-4 cursor-pointer text-sm font-rubik">E-Pannel</li>
          </ol>
        </div>
        <div className="ml-12 mt-9 w-1/12">
          <button className="bg-gradient-to-r from-btnStrt to-btnEnd px-[24px] py-[10px] text-white font-rubik shadow-md rounded-lg">
            <span className="h-10">Login</span>
          </button>
        </div>
      </div>
    </div>
  );
}
