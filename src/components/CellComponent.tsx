
type CellProps = {
    index : number,
    value : string,
    clickFunc : (index : number) => void
}

const CellComponent = ({index, value, clickFunc}: CellProps) => {
  return (
    <button className={`cell ${value === 'X' ? 'text-red-600' : 'text-blue-600'}`} onClick={()=>{clickFunc(index)}}> {value} </button>
  )
}

export default CellComponent