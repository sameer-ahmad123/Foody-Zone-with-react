import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
const App = () => {
  const [search, setsearch] = useState('')
  const [btn, setbtn] = useState('')
 
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col'>
      <Navbar button = {setbtn} search={setsearch}/>
    
      <Main search={search} btn={btn} />
     
    </div>
  )
}

export default App
