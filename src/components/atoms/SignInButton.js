'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {signIn, signOut, useSession} from 'next-auth/react'
import { useLocalStorage } from '@/services/localStorage'
import Button from './Button'

function SignInButton({...attrs}) {
  const {data: session} = useSession()

  const [user, setUser] = useLocalStorage('user', {})
  const [apiCallIsDone, setApiCallIsDone] = useState(false)

  const saveUserData = (userData) => {
    setUser({...userData, logged: true})
  }

  const removeUserData = () => {
    setUser({logged: false})
  }

  const handleSignIn = () => {
    signIn()
    console.log(session)
    saveUserData(session?.user)
  }
  const handleSignOut = () => {
    signOut()
    removeUserData()
  }

  useEffect(() => {
    if ((user?.logged && !apiCallIsDone)) {
      axios.post(`${process.env.API_URL}/login/`, {
        email: session?.user.email
      })
      .then((res) => saveUserData(res?.data))
      .finally(() => setApiCallIsDone(true))
    }
  }, [session?.user])

  return (
    <div className='flex gap-4 justify-center'>
      {session && session.user 
      ? (
        <Button onClick={handleSignOut} {...attrs}>Sign Out</Button>
      ) : (
        <Button onClick={handleSignIn} {...attrs}>Sign In</Button>
      )}
    </div>
  )
}

export { SignInButton }