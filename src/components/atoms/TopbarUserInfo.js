'use client'

import { SignInButton } from "./SignInButton";
import { useSession } from "next-auth/react"

export default function TopbarUserInfo() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      {session?.user.name && `Hello, ${session?.user.name}`}
      <SignInButton style={{marginTop: 0}}/>
    </div>
  )
}