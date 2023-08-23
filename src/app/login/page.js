'use client'

import { useState, useEffect } from 'react'

export default function Login () {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className='flex flex-col gap-5'>
      <h1 className="text-white text-4xl">Welcome! Tell Me Everything</h1>
      {isClient ? <article className='w-full flex justify-center items-center'><div id="g_id_onload"
        data-client_id="317582431650-houndojl074njmqukma1nd0alnc9ev66.apps.googleusercontent.com"
        data-context="signup"
        data-ux_mode="popup"
        data-login_uri="/login"
        data-auto_prompt="false">
      </div>

      <div class="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left">
      </div>
      <script src="https://accounts.google.com/gsi/client" async></script></article> : ''}
    </section>
  )
}