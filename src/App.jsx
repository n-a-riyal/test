
import { useState } from 'react';
import './App.css'
import Header from './Header/Header';
import Bottles from './components/bottles/Bottles';
import Addbotteforbuy from './components/AddBottleForBuy/Addbotteforbuy';

function App() {

  const [blance,setBlance]=useState(500)
  const [cost,setCost]=useState(0)
  cost.toFixed(2)
  blance.toFixed(2)
const [bottleaddforBuy,setBottleAddForBuy]=useState([])

const handleBottleAddForBuy=(bottle)=>{
 const ishere =  bottleaddforBuy.find((bottle1)=>bottle1==bottle)
 if(ishere){
   alert("ohh, No !!! this bottle is already here")
 }
 else{
  setBottleAddForBuy([...bottleaddforBuy,bottle])
  setCost(cost+bottle.price)
  
  setBlance(blance-bottle.price)
 }

}
const removeBottlesName=(bottle)=>{
 const afterRemoveBottle =bottleaddforBuy.filter((nowbottle)=>nowbottle.id!==bottle.id)
 setBottleAddForBuy(afterRemoveBottle)
 setBlance(blance+bottle.price)
 setCost(cost-bottle.price)
}


  return (
    <>
  <header className=' w-full  z-10 my-5'> <div className='w-11/12 mx-auto '><Header blance={blance}></Header></div></header>
  <main className='w-11/12 mx-auto border-t my-5 py-4 overflow-scroll'>
  <div className=' md:flex w-full'>
    <div className='w-full md:w-2/3 max-h-screen overflow-scroll'>
      <Bottles handleBottleAddForBuy={handleBottleAddForBuy}></Bottles>
    </div>
    <div className='w-full md:w-1/3 p-4'>
    <Addbotteforbuy bottleaddforBuy={bottleaddforBuy} removeBottlesName={removeBottlesName} cost={cost} ></Addbotteforbuy>
    </div>
  </div>

  </main>
  
    </>
  )
}

export default App
