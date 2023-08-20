import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState<string[]>(['', '', '', '', '', '', '', '', '']);
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  const winningCombinations: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  const handleButtonClick = (index: number) => {
    if (data[index] === '' && !winner) {
      const newData = [...data];
      newData[index] = isXNext ? 'X' : 'O';
      setData(newData);
      setIsXNext(!isXNext);
    }
  };

  useEffect(() => {
    // Check for a winner
    for (let i of winningCombinations) {
      const [a, b, c] = i;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        setWinner(data[a]);
        return; // Exit the loop if a winner is found
      }
    }
    // Check for a draw (all cells filled)
    if (!data.includes('')) {
      setWinner('Draw');
    }
  }, [data]);

  const renderStatus = () => {
    if (winner) {
      return winner === 'Draw' ? 'It\'s a draw!' : `Player ${winner} wins!`;
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return (
    <main>
      <div className='container'>
        {data.map((d, index) => (
          <button key={index} className='cell' onClick={() => handleButtonClick(index)}>
            {d}
          </button>
        ))}
      </div>
      <div className='status'>{renderStatus()}</div>
    </main>
  );
}

export default App;
