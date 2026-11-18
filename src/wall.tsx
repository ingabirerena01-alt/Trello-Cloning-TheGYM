import Background from "../src/assets/wal2.jpg";
import Board from "./Board";
import Options from "./options";
import {
  Kanban,
  ChevronDown,
  CircleUserRound,
  Plug,
  Zap,
  Star,
  Ellipsis,
  UserRoundPlus,
  ListFilter,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex flex-col overflow-hidden"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="h-20 bg-[#B65336] flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white p-5">
              Rena's todo list
            </h1>
            <Kanban className="w-2.75px h-10 text-white" />
            <ChevronDown className="w-5 h-10 text-white" />
          </div>
          <div className="flex gap-5 mr-3">
            <CircleUserRound className="invert" />
            <Plug className="invert" />
            <Zap className="invert" />
            <ListFilter className="invert" />
            <Star className="invert" />
            <button className="flex bg-white rounded-lg py-1 px-4 ">
              <UserRoundPlus />
              <h1>Share</h1>
            </button>
            <Ellipsis className="invert" />
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <Board />
        </div>
        <div className="flex justify-center mb-20 mt-auto">
          <Options />
        </div>
      </div>
    </>
  );
}
