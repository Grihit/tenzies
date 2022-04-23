import React from 'react'
import './App.css';
import Die from './components/Die'

function App() {
  
  const [dies, setDie] = React.useState(['1','1','1','1','1','1','1','1','1','1'])
  const dieElements = dies.map(die => {
    return <Die value={die} />
  })
  
  return (
    <main>
      <div className='die--container'>
        {dieElements}
      </div>
    </main>
  );
}

export default App;
