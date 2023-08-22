import { QuestionsContainer } from "@/components/QuestionsContainer"

export default function Dashboard({ params: { id } }) {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-12">
      <h1 className="white-color font-medium text-3xl">Dashboard</h1>
      <h3 className="white-color font-medium text-xl">¡Welcome {id}!</h3>
      <QuestionsContainer/>
    </div>
  )
}