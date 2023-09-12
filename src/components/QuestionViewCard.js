"use client";

import CopyIcon from "@/icons/copy";
import TrashIcon from "@/icons/trash";
import { useState } from "react";
import Button from "./atoms/Button";
import html2canvas from "html2canvas";
import axios from "axios";

function QuestionViewCard({ text, button_without_text, id }) {
  const [deleted, setDeteled] = useState(false)

  const handleShare = async () => {
    const element = document.getElementById(`card-${id}`),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/png");

    const response = await fetch(data);
    const blob = await response.blob();

    navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
  };

  const handleDelete = async (id) => {
    axios.delete(`${process.env.API_URL || process.env.NEXT_PUBLIC_API_URL}/delete-question/${id}`)
    .then(setDeteled(true))
  }

  return (
    deleted 
    ? (
      <div></div>
    ) : (
      <div className="flex flex-col min-w-[250px] max-w-xs max-h-64 p-5">
        <div id={`card-${id}`} className="">
          <div className="w-full h-full bg-black bg-opacity-50">
            <div className="w-full bg-violet-800 rounded-t-2xl px-4 py-2 border-solid border-violet-800 border">
              <h2 className="font-sans font-bold text-xl text-white pb-3">
                Not gonna lie
              </h2>
            </div>
            <div className="w-full bg-white rounded-b-2xl px-4 py-1 ">
              <p className="text-black font-medium pb-3">{text}</p>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-row items-center ${
            button_without_text
              ? "mt-0 justify-start gap-5"
              : "mt-4 justify-between"
          }`}
        >
          <Button
            additionalClasses="gap-2 active:scale-90 duration-300"
            onClick={() => handleShare()}
          >
            {button_without_text ? "" : "Copy image "}
            <CopyIcon className="w-4" />
          </Button>
          <Button 
            additionalClasses="gap-2 active:scale-90 duration-300"
            onClick={() => handleDelete(id)}
          >
            {button_without_text ? "" : "Delete "} <TrashIcon className="w-4" />
          </Button>
        </div>
      </div>
    )
  );
}

export { QuestionViewCard };
