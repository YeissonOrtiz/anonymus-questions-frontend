'use client'

import Link from "next/link";
import TopbarUserInfo from "./atoms/TopbarUserInfo";
import { useLocalStorage } from "@/services/localStorage";

function Topbar() {

  const [user, setUser] = useLocalStorage("user", {})

  return (
    <section className="max-w-7xl flex flex-row justify-between mx-auto p-5">
      <div className="flex flex-row gap-4 justify-center items-center">
        <h2 className="font-semibold" href={'/'}>Tell me everything</h2>
        {user?.user ? <Link href={`/${user?._id}/dashboard/`}>Dashboard</Link> : <></>}
      </div>
      <TopbarUserInfo/>
    </section>
  )
}

export { Topbar }