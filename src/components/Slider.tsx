"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];
function Slider() {
  const [Current, setCurrent]=useState(0)
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrent(Current===slides.length-1?0:Current+1)
    },100000)
    return ()=>clearInterval(interval)
  })
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000"
      style={{transform:`translateX(-${Current*100}vw)`}}>
        
        
        {slides.map((slide)=>(
          <div  className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
            {/*text container*/}
            <div className=" h-1/2 xl:w-1/2 xl:h-full flex items-center flex-col  justify-center gap-16 2xl:gap-12 text-center">
              <h2 className=" text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
              <Link href={slide.url}>
                <button className=" rounded-md bg-black text-white py-3 px-4">Shop Now</button>
              </Link>
            </div>
          {/*image container*/}
          <div className="h-1/2 xl:h-full xl:w-1/2 relative">
            <Image src={slide.img} alt="" fill sizes = "100%" className=" object-cover"></Image>
          </div>
          </div>
        ))}
        </div>
    <div className=" absolute m-auto left-1/2 bottom-8 flex gap-4">{
      slides.map((slide,index)=>(
        <div key={slide.id} className={` w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${Current === index ? "scale-150":""}`} onClick={()=> setCurrent(index)}>
          { Current ===index && (<div className="w-[6px] h-[6px] bg-gray-600 rounded-full "> </div>)}
        </div>
      ))
    }</div>
    </div>
  )
}

export default Slider
