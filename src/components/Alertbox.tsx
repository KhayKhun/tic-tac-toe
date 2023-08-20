
type AlertboxProps = {
    winner : string | null,
    restart : () => void
}

const Alertbox = ({ winner , restart}: AlertboxProps) => {
    console.log(winner)
  return (
    <div className="alert">
        {!winner ? <h1>Draw match!</h1> : <h1>Player <b>{winner}</b> wins!</h1>}
        <button onClick={restart}>Restart</button>
    </div>
  )
}

export default Alertbox