'use client'

import React from 'react'
import { QuestionViewCard } from '@/components/QuestionViewCard'
import { useLocalStorage } from '@/services/localStorage'

export default function SpecificQuestion({params: { idQuestion }}) {
  const [questionContentSubmitted, setQuestionContentSubmitted] = useLocalStorage("QuestionContentSubmitted", "");

  return (
    <QuestionViewCard text={questionContentSubmitted}/>
  )
}