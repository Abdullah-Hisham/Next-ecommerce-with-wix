"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    const Click =()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
    <Image src="/menu.png" alt=""
    width={34}
    height={34}
    className="cursor-pointer"
    onClick={Click}
    />{
    isOpen &&(
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center" >
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
        </div>

        )
    }
    </div>
  )
}

export default Menu
