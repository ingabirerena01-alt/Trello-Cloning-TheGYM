import { Inbox, Calendar, Columns3 } from "lucide-react";
export default function Options() {
  return (
    <>
      <div className="flex bg-black rounded-xl w-lg h-10 gap-6 items-center justify-center">
        <div className="flex hover:bg-blue-500 rounded-2xl">
          <Inbox className="invert" />
          <h1 className="text-white">Inbox</h1>
        </div>
        <div className="flex hover:bg-blue-500 rounded-2xl">
          <Calendar className="invert" />
          <h1 className="text-white">Planner</h1>
        </div>
        <div className="flex hover:bg-blue-500 rounded-2xl">
          <Columns3 className="invert" />
          <h1 className="text-white">Board</h1>
        </div>
        <div className="flex hover:bg-blue-500 rounded-2xl">
          <Columns3 className="invert" />
          <h1 className="text-white">Switch Boards</h1>
        </div>
      </div>
    </>
  );
}
