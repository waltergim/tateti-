
const LogicaGanadora = (squarem) =>{
    const Ganador = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let i = 0; i < Ganador.length; i++) {
     const [a,b,c] = Ganador[i]
     if(squarem[a] && squarem[a] === squarem[b] && squarem[a] === squarem[c]){
      return squarem[a]
     }
    }
    return null
  }
 

  export default LogicaGanadora