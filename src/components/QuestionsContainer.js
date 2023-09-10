import React from 'react'
import { QuestionViewCard } from './QuestionViewCard'

function QuestionsContainer({questions}) {
  return (
    <div 
      className='
      flex flex-row flex-wrap justify-center md:justify-start items-start gap-5'
    >
      {questions?.map((question, index) => 
        <QuestionViewCard 
          button_without_text={true} 
          text={question?.question}
          key={question?._id}
          id={question?._id}
        />
      )}
    </div>
  )
}

export { QuestionsContainer }