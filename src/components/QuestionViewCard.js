import CopyIcon from "@/icons/copy";
import TrashIcon from "@/icons/trash";
import React from "react";
import Button from "./atoms/Button";
import html2canvas from "html2canvas";

function QuestionViewCard({ text }) {
  const handleShare = async () => {
    const element = document.getElementById('card'),
    canvas = await html2canvas(element),
    data = canvas.toDataURL('image/png');

    const response = await fetch(data)
    const blob = await response.blob()

    navigator.clipboard.write([new ClipboardItem({ 'image/png': blob})])
  }

  return (
    <div className="flex flex-col min-w-[250px] max-w-xs max-h-64">
      <div className="w-full h-full bg-transparent" id="card">
        <div className="w-full bg-violet-800 rounded-t-2xl px-4 py-2">
          <h2 className="font-sans font-bold text-xl text-white">
            Not gonna lie
          </h2>
        </div>
        <div className="w-full bg-white rounded-b-2xl px-4 py-2 ">
          <p className="text-black font-medium">{text}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-between items-center">
        <Button additionalClasses="gap-2 active:scale-90 duration-300" onClick={() => handleShare()}>
          Copy image <CopyIcon className="w-4" />
        </Button>
        <Button additionalClasses="gap-2 active:scale-90 duration-300">
          Delete <TrashIcon className="w-4" />
        </Button>
      </div>
    </div>
  );
}

export { QuestionViewCard };
