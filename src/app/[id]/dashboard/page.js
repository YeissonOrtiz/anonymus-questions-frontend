'use client'

import axios from "axios"
import { QuestionsContainer } from "@/components/QuestionsContainer"
import Button from "@/components/atoms/Button"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useLocalStorage } from "@/services/localStorage"

export default function Dashboard({ params: { id } }) {
  const { push } = useRouter()
  const [user, setUser] = useLocalStorage("user")
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      push('/login')
    },
  })

  const [questions, setQuestions] = useState([])

  const copyURLtoClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:3000/${id}/create`)
  }

  useEffect(() => {
    if (status === "authenticated" && id === user?._id ) {
      axios.get(`http://localhost:3001/api/${id}/get-questions`)
      .then(res => setQuestions(res?.data))
    } else if (user._id) {
      push(`/${user._id}/dashboard`)
    } else {
      push('/login')
    }
  }, [session?.user])

  return (
    <div className="flex flex-col justify-center items-center w-full gap-12">
      <h1 className="white-color font-medium text-3xl">Dashboard</h1>
      <h3 className="white-color font-medium text-xl">¡Welcome to your dashboard!</h3>
      <Button onClick={copyURLtoClipboard} additionalClasses={'active:scale-90 duration-300'}>Create link</Button>
      {questions && <QuestionsContainer questions={questions}/>}
    </div>
  )
}