import React from 'react'
import { QuestionFormCard } from "@/components/QuestionFormCard";

export default function CreateQuestion({params: {id}}) {
  return (
    <QuestionFormCard owner_id={id}/>
  )
}