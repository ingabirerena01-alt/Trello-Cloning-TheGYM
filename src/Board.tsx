import { Plus } from "lucide-react";
import { useState } from "react";
import List from "./list";

export default function Board() {
  const [listname, addlistname] = useState("");
  const [lists, setlists] = useState<string[]>([]);
  function HandleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (listname == "") return;
    else {
      setlists((prev) => [...prev, listname]);
      addlistname("");
    }
  }
  return (
    <>
      <div className="flex items-start gap-4 overflow-x-auto px-2 h-[calc(100vh-5rem)]">
        {lists.map((title, index) => (
          <List key={index} name={title} />
        ))}
        <form
          className="min-h-12 bg-[#eaaa60] hover:bg-[#edc08d] min-w-80 flex mt-10 rounded-xl items-center ml-2"
          onSubmit={HandleSubmit}
        >
          <Plus />
          <input
            name="title"
            placeholder="Add another list "
            value={listname}
            onChange={(e) => addlistname(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}
