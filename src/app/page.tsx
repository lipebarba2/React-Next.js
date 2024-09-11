'use client'

import { Person } from "@/types/Person";
import { TodoItem } from "@/types/TodoItem";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

    const [itemInput, setItemInput] = useState('')
    const [list, setList] = useState<TodoItem[]>([
        { id: 1, label: 'Estudar React', checked: false},
        { id: 2, label: 'Estudar Node', checked: false}
    ])

    const handleAddButton = () => {
        if (itemInput.trim() !== '')
        setList([
            ...list,
            {id: list.length + 1, label: itemInput, checked: false}
        ])

        setItemInput('')
    }

    const handleDeleteButton = (id: number) => {
       setList(
        list.filter(item => item.id !== id)
       )
    }

    const toggleItem = (id: number) => {
        setList(list.map((item, i) => 
            i === id ? { ...item, checked: !item.checked } : item
        ));
    }
    

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl">

        <h1 className=" text-4xl mt-5">Lista de Tarefas</h1>

        <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2">
            <input
                type="text"
                placeholder="O que deseja fazer?"
                className="flex-1 border border-black p-3 text2xl text-black rounded-b-md mr-3 " 
                value={itemInput}
                onChange={e => setItemInput(e.target.value)}
            />

            <button onClick={handleAddButton} >Adicionar</button>

        </div>    

        <p className="my-4">{list.length} items na lista</p>  

        <ul className="w-full max-w-lg list-disc pl-5">

            {list.map((item) => (
                <li key={item.id}>

                    <input 
                        type="checkbox" 
                        checked={item.checked}
                        className="w-4 h-4 mr-3"
                        onClick={() => toggleItem(item.id)}
                    />

                    {item.label}

                    <button 
                        className="flex-1 p-3 bg-red-600 rounded-lg border-none m-6 hover:underline"
                        onClick={() => handleDeleteButton(item.id)}
                        >
                            Deletar
                    </button>
                
                </li>
            ))}
            

        </ul>

    </div>
  );
}
