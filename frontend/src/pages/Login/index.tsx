import React, { useState } from 'react'
import { Title } from './components/Title.tsx'
import { Input } from './components/Input.tsx'
import { RememberMe } from './components/RememberMe.tsx'
import { ForgotPassword } from './components/ForgotPassword.tsx'

export function Login(){
    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const data = {
            username: formData.get('username'), 
            password: formData.get('password'), 
        };
        authenticate(data);
    }

    async function authenticate(payload: any){
        const options = {
            method: 'POST',
            body: JSON.stringify(payload)  
        };
        const response = await fetch('http://localhost:5000/auth', options )
        const data = await response.json();
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-96 p-6 shadow-xl rounded-md'>
                <Title />
                <hr className='mt-3'/>
                <form onSubmit={handleSubmit}>
                    <Input id="username" name="username" label='User' placeholder='Insert username'/>
                    <Input id="password" name="password" label='Password' placeholder='Insert password'/>
                    <div className='mt-3 flex justify-between items-center'>
                        <RememberMe />
                        <ForgotPassword />
                    </div>
                    <button type='submit' className='w-full mt-5 rounded-md py-1 bg-blue-700 text-white font-semibold hover:bg-blue-500'>
                        Login
                    </button>
                </form>
                
            </div>           
        </div>
    )
}