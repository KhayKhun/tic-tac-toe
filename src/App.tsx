import { useState,useEffect } from 'react'
import CellComponent from './components/CellComponent'
import Alertbox from './components/Alertbox'

function App() {
  const [data,setData] = useState<string[]>(['','','','','','','','',''])
  const [Xturn,setXturn] = useState<boolean>(true)
  const [end, setEnd] = useState<boolean>(false)
  const [winner, setWinner] = useState<string | null>(null)

  const possibleWins : number[][] = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  const handleButtonClick = (index: number) => {
    if(data[index] === ''){
      const newData = [...data]; 
      newData[index] = Xturn ? 'X' : 'O'; 
      setData(newData); 
      setXturn((prev) => !prev)
    };
    }

  useEffect(() => {
    for (let i of possibleWins){
      const [a,b,c]= i;
      if (data[a] !== '' && data[a] === data[b] && data[b] === data[c]){
        console.log('con1')
        setWinner(data[a])
        setEnd(true)
        return;
      } else if(!data.includes('')){
        console.log('con2')
        setEnd(true)
        return;
      }
    }

  }, [data])

  function handleRestart(){
    setData(['','','','','','','','','',])
    setWinner(null)
    setEnd(false)
      
  }

  return (
    <main>
      <p>Player {Xturn ? 'X' : 'O'}'s turn!</p>
      <div className='container'>
        {
          data.map((d,index)=> {
            return <CellComponent key={index} index={index} value={d} clickFunc={()=>{handleButtonClick(index)}}/>
          })
        }
      </div>
      {end ? <Alertbox winner={winner} restart={()=>{handleRestart()}}/> : null}
    </main>
  )
}

export default App
