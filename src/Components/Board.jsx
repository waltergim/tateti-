import React, { useState } from 'react'
import { Square } from './Square'
import LogicaGanadora from '../Helpers/Logica'

export const Board = () => {

  const [proximaJugada, setProximaJugada] = useState(true)
  const [squarem, setSquare] = useState(Array(9).fill(null))

  const handleClick = (i) =>{
      if(squarem[i] || LogicaGanadora(squarem)){
      return
      }
      const siguienteSquare = squarem.slice()
      if(proximaJugada){
        siguienteSquare[i] = '❌'
      }else{
        siguienteSquare[i] = '⚪'
      }
      setSquare(siguienteSquare)
      setProximaJugada(!proximaJugada)
  }

  LogicaGanadora({squarem})

  const winner  = LogicaGanadora(squarem)
  let status
  if(winner ){
    status = 'el ganador es: ' + winner 
   
  }else {
    status = 'Esto es un empate'
  }
   
  const Reset = () =>{
    setSquare(Array(9).fill(null))
  }
  
  return (
    <>

    <div className='status'>{status}
    <button onClick={Reset}>Empezar de nuevo</button>
    </div>
    <section>
    <div className='container'>
     <div  className="board-row btn1">
     <Square   value={squarem[0]}  onSquare={()=>handleClick(0)} />
     </div>
     <div  className="board-row btn2">
     <Square   value={squarem[1]}  onSquare={()=>handleClick(1)}/>
     </div>
     <div  className="board-row btn3">
     <Square   value={squarem[2]}  onSquare={()=>handleClick(2)}/>
    </div>
    <div  className="board-row btn4"> 
     <Square   value={squarem[3]}  onSquare={()=>handleClick(3)}/>
     </div>
     <div  className="board-row btn5"> 
     <Square   value={squarem[4]}  onSquare={()=>handleClick(4)}/>
     </div>
     <div  className="board-row btn6"> 
     <Square   value={squarem[5]}  onSquare={()=>handleClick(5)}/>
    </div>
    <div  className="board-row btn7">
     <Square   value={squarem[6]}  onSquare={()=>handleClick(6)}/>
     </div>
     <div  className="board-row btn8">
     <Square   value={squarem[7]}  onSquare={()=>handleClick(7)}/>
     </div>
     <div  className="board-row btn9">
     <Square   value={squarem[8]}  onSquare={()=>handleClick(8)}/>
     </div>
    </div>
    </section>
    </>
  )
}
