import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [tiempoRestante, setTiempoRestante] = useState(0)
  useEffect(() => {
    setTimeout(() =>{
      setTiempoRestante(new Date("1/1/2025").getTime() - Date.now());
    },100)
  }, [tiempoRestante])

  return (
    <>
    <h1>¡COMING SOON 2025!</h1>
    <div className="contador">
      <div className="carta">
      <p className='pNum'>{Math.floor(tiempoRestante / (1000 * 60 * 60 * 24))}</p>
      <div className="titulo"><p>Dias</p></div>
      </div>
      <div className="carta">
      <p className='pNum'>{Math.floor(tiempoRestante / (1000 * 60 * 60) % 24)}</p>
      <div className="titulo"><p>Horas</p></div>
      </div>
    <div className="carta">
    <p className='pNum'>{Math.floor(tiempoRestante / 1000 / 60 % 60)}</p>
    <div className="titulo"><p>Minutos</p></div>
    </div>
    <div className="carta">
    <p className='pNum'>{Math.floor((tiempoRestante / 1000) % 60)}</p>
    <div className="titulo"><p>Segundos</p></div>
    </div>
    </div>

    </>
  )
}

export default App
