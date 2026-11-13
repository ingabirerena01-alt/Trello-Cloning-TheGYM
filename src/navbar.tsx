import Library from "../src/assets/librar.png";
import Trello from "../src/assets/trello.png";
import Notifications from "../src/assets/image (1).png";
import Question from "../src/assets/inquiry.png";
import Mic from "../src/assets/micspeaker.png";
import { CircleUserRound, Search } from "lucide-react";
export default function Navbar() {
  return (
    <>
      <div className="w-full h-15 bg-[#1f1f21] flex ">
        <img src={Library} className="w-8 h-11 pt-4 ml-5 invert-50" />
        <div className="mt-1 ml-3 h-12 w-35 flex items-center">
          <img src={Trello} className="object-cover h-auto w-auto invert-50" />
        </div>
        <div className="flex justify-center gap-2 ml-40">
          <Search />
          <input
            placeholder="Search"
            className="text-white border-2 rounded-lg h-12 w-5xl mt-1 ml-4"
          />
          <button className="bg-[#5c91fc] justify-center rounded-lg h-12 w-16 mt-1 font-semibold">
            Create
          </button>
        </div>
        <div className="flex ml-85">
          <img src={Notifications} className="w-7 h-11 pt-4 ml-5 invert-75" />
          <img src={Question} className="w-6 h-11 pt-4 ml-5 invert-75" />
          <img src={Mic} className="w-8 h-13 pt-2 ml-5 invert-25 " />
          <CircleUserRound className="w-5 h-5 invert-75 mt-5 ml-5" />
        </div>
      </div>
    </>
  );
}
