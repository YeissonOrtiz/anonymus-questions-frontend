"use client";

import React, { useState } from "react";
import { useLocalStorage } from "@/services/localStorage";
import Button from "./atoms/Button";

const SubmitDone = () => (
  <div>
    <h2 className="font-sans font-bold text-xl text-white">Question submitted</h2>
  </div>
);

function QuestionFormCard() {
  const [questionContentSubmitted, setQuestionContentSubmitted] = useLocalStorage("QuestionContentSubmitted", "");
  const [question, setQuestion] = useState("");
  const [questionSubmitted, setQuestionSubmitted] = useState(false);

  const handleSubmit = () => {
    setQuestionContentSubmitted(question);
    setQuestionSubmitted(true);
  };

  return questionSubmitted ? (
    <SubmitDone />
  ) : (
    <div className="flex flex-col min-w-[250px] max-w-xs max-h-64">
      <div className="w-full bg-violet-800 rounded-t-2xl px-4 py-2">
        <h2 className="font-sans font-bold text-xl text-white">
          Not gonna lie
        </h2>
      </div>
      <div className="w-full bg-white rounded-b-2xl px-4 py-2 ">
        <form>
          <textarea
            className="text-black p-2 resize-none"
            placeholder="Type something..."
            rows="5"
            cols="26"
            onChange={(e) => setQuestion(e.target.value)}
            maxLength={100}
          />
        </form>
      </div>
      <Button onClick={() => handleSubmit()}>Send question</Button>
    </div>
  );
}

export { QuestionFormCard };
