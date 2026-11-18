import { Ellipsis, Plus, StickyNotePlus, X } from "lucide-react";
import { useState } from "react";
import Trellocard from "./card";
type Props = {
  name: string;
};

export default function List(Props: Props) {
  const [cardname, Addcardname] = useState<string>("");
  const [cards, Addcard] = useState<string[]>([]);
  const [ad, setad] = useState(true);
  function Handlesubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (cardname.length == 0) {
      return;
    } else {
      e.preventDefault();
      Addcard((prevname) => [...prevname, cardname]);
      Addcardname("");
    }
  }
  function HandleClick(e: React.SyntheticEvent) {
    e.preventDefault();
    setad((prev) => !prev);
  }
  return (
    <>
      <div className="flex flex-col justify-between bg-mist-900 w-70 min-h-30 rounded-xl ml-4 mt-10 self-start">
        <div className="flex justify-between text-white p-3">
          <h1>{Props.name}</h1>
          <div className="flex gap-1.5">
            <h1>{cards.length}</h1>
            <Ellipsis />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#36362D] text-white text-sm p-3 rounded-lg"
            >
              {card}
            </div>
          ))}
        </div>

        {ad ? (
          <div className="flex text-white p-3 justify-between items-center">
            <form
              className="flex hover:bg-[#36362D] w-50 h-10 items-center rounded-xl"
              onSubmit={Handlesubmit}
            >
              <Plus />
              <input
                onClick={HandleClick}
                placeholder="Add a card"
                value={cardname}
                type="text"
                onChange={(e) => Addcardname(e.target.value)}
              />
            </form>
            <div className="hover:bg-[#36362D] w-10 h-10 flex justify-center  rounded-xl items-center">
              <StickyNotePlus />
            </div>
          </div>
        ) : (
          <div>
            <form className="mt-3" onSubmit={Handlesubmit}>
              <Trellocard name={cardname} Addcardname={Addcardname} />
            </form>
            <div className="flex gap-2 mb-4 ml-3 mr-3 items-center">
              <button className=" bg-blue-500 rounded-lg py-3 px-4 ">
                AddCard
              </button>
              <button className=" bg-fuchsia-900 rounded-lg py-3 px-4">
                Tip
              </button>
              <X className="invert-75" onClick={HandleClick} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
