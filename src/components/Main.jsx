import React from 'react'
import { useState,useEffect } from 'react';
const Main = ({search,btn}) => {

     const foodData = [
    {
      name: "Boilded Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisici",
      image: "./egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisici",
      image: "/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit ami",
      image: "/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisici",
      image: "/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisici",
      image: "/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisici",
      image: "/pancake.png",
      type: "dinner",
    },
  ];
const filtered = foodData.filter((item) => {
  if(btn != "all"){
    return item.name.toLowerCase().includes(search.toLowerCase()) && item.type.toLowerCase().includes(btn.toLowerCase())
  }
  else{
     return item.name.toLowerCase().includes(search.toLowerCase())
  }

});

    return (
        <div className='w-full flex-1 relative flex justify-center items-start text-white overflow-y-auto py-10'>
            <div className="fixed top-[25%] bottom-0 left-0 w-full z-0">
                <img className='object-cover w-full h-full' src="./bg.jpg" alt="Background" />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="cards flex justify-center items-center flex-wrap gap-7 relative z-10 w-[90%] lg:w-[65%] mt-4 mb-10">  
                {filtered.map((item, index) => (
                    <div key={index} className="card flex justify-center items-center bg-white/10 backdrop-blur-md border hover:cursor-pointer transition-all duration-300 hover:scale-105 rounded-2xl border-white/20 shadow-lg h-32 w-64">
                        <div className="image rounded-full w-[50%] h-full flex justify-center items-center">
                            <img src={item.image} alt="Food" className='object-cover w-[80%] h-[80%] rounded-full ' />
                        </div>
                        <div className='w-[50%] relative h-full flex flex-col justify-center items-center'>
                            <p className='font-bold absolute top-1 left-1'>{item.name}</p>
                            <p className='text-xs text-center px-2'>{item.text}</p>
                            <button className='bg-red-500 absolute right-2 bottom-2 px-0.5 mt-1 text-sm py-0.5 md:px-3.5 md:py-1.5 font-bold rounded-sm hover:cursor-pointer transition-all duration-100 hover:scale-105'>
                                {item.price}
                            </button>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Main