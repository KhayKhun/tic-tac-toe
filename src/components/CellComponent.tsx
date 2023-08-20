
type CellProps = {
    index : number,
    value : string,
    clickFunc : (index : number) => void
}

const CellComponent = ({index, value, clickFunc}: CellProps) => {
  return (
    <button className='cell' onClick={()=>{clickFunc(index)}}>{value}</button>
  )
}

export default CellComponent