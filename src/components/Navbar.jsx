import React from 'react'

const Navbar = ({search , button}) => {
    return (
        <div className='bg-slate-800 h-[25%] w-screen text-white'>
            <div className="upper  flex flex-col md:flex-row justify-around items-center h-[50%] w-full  ">
                <div className='md:text-3xl text-2xl font-bold'>F<span className='text-red-700'>oo</span>dy Z<span className='text-red-700'>o</span>ne</div>
                <div  >
                    <input onChange={(e)=>search(e.target.value)} className='border border-red-600 px-2.5 py-1 rounded-sm text-white' type="text" placeholder='Search Food...' />
                </div>
            </div>
            <div className='buttons h-[50%] w-full flex justify-center items-center gap-3'>
                <button onClick={()=>button("all")} className='bg-red-500 px-1.5 py-0.5 md:px-3.5 md:py-1.5 font-bold rounded-sm hover:cursor-pointer transition-all duration-100 hover:scale-104'>All</button>
                <button onClick={()=>button("breakfast")} className='bg-red-500 px-1.5 py-0.5 md:px-3.5 md:py-1.5  font-bold rounded-sm hover:cursor-pointer transition-all duration-100 hover:scale-104'>BreakFast</button>
                <button onClick={()=>button("lunch")} className='bg-red-500 px-1.5 py-0.5 md:px-3.5 md:py-1.5  font-bold rounded-sm hover:cursor-pointer transition-all duration-100 hover:scale-104'>Lunch</button>
                <button onClick={()=>button("dinner")} className='bg-red-500 px-1.5 py-0.5 md:px-3.5 md:py-1.5  font-bold rounded-sm hover:cursor-pointer transition-all duration-100 hover:scale-104'>Dinner</button>
            </div>

        </div>
    )
}

export default Navbar
