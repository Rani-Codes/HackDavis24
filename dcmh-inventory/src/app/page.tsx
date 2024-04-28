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
      <div className="flex flex-col items-center"> {/* Centering all children */}
              <h1 className="text-6xl font-bold text-center mt-20 ">Hi we need:</h1>
              {items && items.map((item: InventoryItem) => (
              <div className="border border-gray-400 bg-white border-2 rounded-md p-4 h-20 flex items-center justify-between mt-20 mb-4 max-w-[1000px]"> {/* Centering this div */}
                <div className="ml-4 flex items-center">
                  <span className="text-2xl font-bold pr-4">{item.goalAmount}</span>
                  <span className="text-2xl font-bold text-left w-96">{item.name}</span>
                  <div className="h-4 w-4 bg-red-500 rounded-full ml-4"></div>
                  <span className="text-lg font-semibold text-red-600 ml-2 mr-10">Low-stock</span>
                </div>
              </div>
              ))}
            </div>

</div>)}