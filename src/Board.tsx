import { Ellipsis, Plus, StickyNotePlus } from "lucide-react";
type Props = {
  name: string;
};
export default function Board(prop: Props) {
  function Handleclick() {
    alert("Its okay");
  }
  return (
    <>
      <div className="flex flex-col justify-between bg-mist-900 w-70 min-h-50 rounded-xl ml-4 mt-10">
        <div className="flex justify-between text-white p-3">
          <h1>{prop.name}</h1>
          <div className="flex gap-1.5">
            <h1>1</h1>
            <Ellipsis />
          </div>
        </div>
        <div className="flex text-white p-3 justify-between items-center">
          <button
            onClick={Handleclick}
            className="flex hover:bg-[#36362D] w-50 h-10 items-center rounded-xl"
          >
            <Plus />
            <h1>Add a card</h1>
          </button>
          <div className="hover:bg-[#36362D] w-10 h-10 flex justify-center  rounded-xl items-center">
            <StickyNotePlus />
          </div>
        </div>
      </div>
    </>
  );
}
