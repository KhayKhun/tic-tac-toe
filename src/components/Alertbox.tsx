
type AlertboxProps = {
    winner : string | null,
    restart : () => void
}

const Alertbox = ({ winner , restart}: AlertboxProps) => {
  return (
    <div className="alert">
        <div className="flex flex-col items-center gap-6">
          <h1 className="result">{!winner ? 'Draw match!' : <>Player <b>{winner}</b> wins!</> }</h1>
          <button onClick={restart} className="restart-btn">Restart</button>
        </div>
    </div>
  )
}

export default Alertbox