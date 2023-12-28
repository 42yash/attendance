'use client'

import React from 'react'

export default function Signup () {
  const handleLogin = async (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    const usertype = e.target.usertype.value

    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, usertype })
    })
    const data = await res.json()
    console.log(data)
  }

  return (
        <form className="flex flex-col" onSubmit={handleLogin}>

            <label htmlFor="username">Username</label>
            <input required className="p-1 mb-4 border-2" type="text" name="username" id="username" />

            <label htmlFor="password">Password</label>
            <input required className="p-1 mb-4 border-2" type="password" name="password" id="password" />

            <label className="inline-flex items-center mx-2">
                <input type="radio" className="form-radio text-indigo-600" name="usertype" value="STUDENT" defaultChecked />
                <span className="ml-2 text-gray-700">Student</span>
            </label>
            <label className="inline-flex items-center mx-2">
                <input type="radio" className="form-radio text-indigo-600" name="usertype" value="TEACHER" />
                <span className="ml-2 text-gray-700">Teacher</span>
            </label>
            <label className="inline-flex items-center mx-2">
                <input type="radio" className="form-radio text-indigo-600" name="usertype" value="IPM" />
                <span className="ml-2 text-gray-700">IPM</span>
            </label>

<button className="bg-slate-200 hover:bg-slate-300 p-2 rounded-lg w-20" type="submit">Signup</button>

        </form>
  )
}
