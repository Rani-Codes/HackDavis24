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

  );
}
