import React from 'react'
import './App.css';
import Die from './components/Die'

function App() {
  
  const [dies, setDies] = React.useState([{}])
  React.useEffect(() => {
    const newDies = [{}]
    for(let i=0;i<10;++i){
      const newDie =
      {
          id: i+1, 
          value: Math.floor(Math.random()*5 + 1), 
          fixed: false
      }
      newDies[i]=newDie
    }
    setDies(newDies)
  }, [])
  
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
              class = {die.fixed? 'die--fix' : ''}
              key={die.id} 
              value={die.value}
              click={() => fixDie(die.id)} 
            />
  })
  
  return (
    <main>
      <div className='die--container'>
        {dieElements}
      </div>
      <button className='roll' onClick={changeDie}>Roll</button>
    </main>
  );
}

export default App;
