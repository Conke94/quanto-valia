import React from "react";

interface InputProps {
    id: string,
    name: string,
    label: string,
    placeholder: string
}

export function Input({id, name, label, placeholder}: InputProps){
    return (
        <div className="mt-3">
            <label className='block mb-1'>{label}</label>
            <input 
                id={id} 
                name={name}
                type='text' 
                className='w-full px-2 py-1' 
                placeholder={placeholder}
                style={{ boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.3)' }}
            />
        </div>
    )
}