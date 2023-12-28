'use client'

import React, { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Login() {
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();
    
    async function handleLogin(formData: FormData){

        const username = formData.get('username')
        const password = formData.get('password')

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        const data = await res.json();
        if(!data){
            setErrorMessage('Invalid Credentials')
        }else{
            if(data.usertype === "STUDENT") {
                router.push('/student');
            } else if(data.usertype === "TEACHER") {
                router.push('/teacher');
            } else if(data.usertype === "ADMIN") {
                router.push('/admin');
            } else if(data.usertype === "IPM") {
                router.push('/ipm');
            } else setErrorMessage('Invalid Credentials')
        }
    }


    return (
        <form className="flex flex-col" action={handleLogin}>
            {errorMessage && <p className="text-red">{errorMessage}</p>}
            <label htmlFor="username">Username</label>
            <input required className="p-1 mb-4 border-2" type="text" name="username" id="username" />
            <label htmlFor="password">Password</label>
            <input required className="p-1 mb-4 border-2" type="password" name="password" id="password" />
            <button className="bg-slate-200 hover:bg-slate-300 p-2 rounded-lg w-20" type="submit">Login</button>
        </form>
    )
}