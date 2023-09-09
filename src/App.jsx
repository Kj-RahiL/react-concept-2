import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert('click button 1')
  }
  const handleClick2 =() =>{
    alert('button 2 clicked')
  }
  const addToFive =(num) =>{
    confirm( num + 5)
  }


  return (
    <>
      <h2>React concept part 2</h2>



      <Friends></Friends>
      <Counter></Counter>


      {/* <button onClick={handleClick}>click me 1</button>
      <button onClick={handleClick2}>click me 2</button>

       
      <button onClick={() => {alert('third click')}}>click me 3</button>
      <button onClick={() => addToFive(3)}>click me 4</button> */} 

    </>
  )
}

export default App
