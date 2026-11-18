import React, { useState } from "react";

type Props = {
  name: string;
  Addcardname: (value: string) => void;
};

export default function Trellocard(Props: Props) {
  return (
    <>
      <div>
        {
          <div className="flex flex-col">
            <input
              className="bg-amber-900 text-white text-sm p-3 w-50 ml-5 flex justify-center rounded-lg mb-5"
              placeholder="Add a title or a link"
              value={Props.name}
              type="text"
              onChange={(e) => Props.Addcardname(e.target.value)}
            />
          </div>
        }
      </div>
    </>
  );
}
