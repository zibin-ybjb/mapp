import { useState, useEffect } from 'react'
import {get} from './config/fetch'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [updata, setupdata] = useState(0);
  useEffect(() => {
    setInterval(()=>{
      get('/swwdw').then(result => {
        setupdata(result);
      })
    },1000)


    return () => {
      
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {updata}
          </button>
      </header>
    </div>
  )
}

export default App
