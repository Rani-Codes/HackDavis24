'use client'
import Image from "next/image";
import React, {use, useEffect, useState } from 'react'
import { Navbar } from "./components/Navbar";

interface InventoryItem {
  _id: string;
  name: string;
  currentAmount: number;
  goalAmount: number;
  __v: number;
}



export default function Home({params}: any) {
  const [message, setMessage] = useState("Loading")
  const [items, setItem] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/api/inventory/662df371d115f4a5725148a9").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.message)
        const items = data as any;
        setItem([items])
      }
    )
  }, [])
  
  return (
    <div className="text-black">
      <Navbar/>
      <h1 className="text-6xl font-medium text-center mt-40 ">Hi we need:</h1>
      <h2>{message}</h2>
      {items && items.map((item: InventoryItem) => (
      <div key={item._id} className="mt-20 mx-28 bg-gray-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg font-bold">{item.goalAmount}</span>
          </div>

          <div className="flex items-center ml-4">
            <span className="text-lg">{item.name}</span>
          </div>

          <div className="flex items-center ml-4">
            <div className="h-8 w-8 bg-green-500 rounded-full"></div>
          </div>

          <div className="flex items-center ml-4">
            <span className="text-lg font-semibold text-red-600">
              High Priority
            </span>
          </div>
        </div>
      </div>
    ))}

    </div>
  );
}
