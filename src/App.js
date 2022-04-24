import React from 'react'
import { nanoid } from 'nanoid';
import './App.css';
import Die from './components/Die'

function App() {
  
  const [dies, setDies] = React.useState(setNewDies())
  // React.useEffect(() => {
    function setNewDies(){
    const newDies = [{}]
    for(let i=0;i<10;++i){
      const newDie =
      {
          id: nanoid(), 
          value: Math.floor(Math.random()*5 + 1), 
          fixed: false
      }
      newDies[i]=newDie
    }
    return newDies
  }
  // }, [])
  
  function changeDie(){
    setDies(prevDies => {
      return prevDies.map(die => {
        return !die.fixed ? {...die, value: Math.floor(Math.random()*5 + 1)} : die
      })
    })
  }

  function fixDie(dieId){
    setDies(prevDies => {
      return prevDies.map(die => {
        return die.id === dieId ? {...die, fixed: !die.fixed} : die
      })
    })
  }

  const dieElements = dies.map(die => {
    return <Die
              key={die.id}
              class = {die.fixed? 'die--fix' : ''} 
              value={die.value}
              click={() => fixDie(die.id)} 
            />
  })

  const [tenzies, setTenzies] = React.useState(false)
  const firstUpdate = React.useRef(true);
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const firstValue = dies[0].value
    for(let i=1; i<10;++i){
      if(dies[i].value !== firstValue || !dies[i].fixed || !dies[0].fixed){
        return
      }
    }
    setTenzies(true)
    setDies(setNewDies())

  }, [dies])

  function toggle(){
    setTenzies(prevTenzies => !prevTenzies)
  }
  
  return (
    <main>
      { 
        !tenzies ?
        <>
          <div className='tenzies'>
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          </div>
          <div className='die--container'>
              {dieElements}
          </div>
          <button className='roll' onClick={changeDie}>Roll</button>
        </>
        :
        <div className='tenzies--won'>
          <h1>Congratulations<br /> You won!</h1>
          <span className='icon' onClick={toggle}>
            <i className="fa-solid fa-arrow-rotate-right"></i>
          </span>
        </div>
      }
    </main>
  );
}

export default App;
