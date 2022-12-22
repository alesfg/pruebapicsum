import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, settime] = useState(new Date().toDateString())
  const [hour, sethour] = useState(new Date().toLocaleTimeString())
  const [imge, setimge] = useState('https://picsum.photos/200')
  const [pause, setpause] = useState(false)
  
  useEffect(() => {
    const tempo = setInterval(() => {
      sethour(new Date().toLocaleTimeString())
      settime(new Date().toDateString())
    }, 1000);
    
    const imgchange = setInterval(() => {
    !pause &&
      fetch('https://picsum.photos/200')
        .then((data) => setimge(data.url));
        console.log('camb')
    }, 4000);

    return() => {
      clearInterval(tempo)
      clearInterval(imgchange)
    }
  }, [pause])

  function toggle() {
    setpause(pause => !pause)
  }

  return (
    <div className="App">
      <h2>SICE / Capitol</h2>
      <h2>{hour}</h2>
      <h4>{time}</h4>
      <div>
          <img src={imge} onClick={toggle} alt='picsum' />
      </div>
    </div>
  )
}

export default App
