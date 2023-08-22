import React from 'react'
import { QuestionViewCard } from './QuestionViewCard'

function QuestionsContainer({cards}) {
  return (
    <div className='flex flex-row flex-wrap justify-center md:justify-start items-center gap-5'>
      <QuestionViewCard/>
      <QuestionViewCard/>
      <QuestionViewCard/>
      <QuestionViewCard/>
      <QuestionViewCard/>
      <QuestionViewCard/>
    </div>
  )
}

export { QuestionsContainer }