'use client'

import { useSession } from "next-auth/react";
import React, { useEffect } from 'react'
import { useLocalStorage } from "@/services/localStorage";
import { useRouter } from 'next/navigation'

export default function Login() {
  const { push } = useRouter();
  const [user, setUser] = useLocalStorage('user')
  const {data: session, status} = useSession()

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      push(`/${user?._id}/dashboard`)
    }
  }, [session?.user])

  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-white text-4xl">Welcome! Tell Me Everything</h1>
    </section>
  );
}
