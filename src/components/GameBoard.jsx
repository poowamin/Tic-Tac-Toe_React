// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

export default function GameBoard({ onSelectedSquare, gameBoard }) {
  // let gameBoard = initialGameBoard;

  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;

  //   gameBoard[row][col] = player;
  // }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelection(rowIndex, colIndex) {
  // setGameBoard((prevGameBoard) => {
  // const updatedBoard = [
  // ...prevGameBoard.map((innerArray) => [...innerArray]),
  // ];
  // updatedBoard[rowIndex][colIndex] = "X"; // (not recommen)
  // updatedBoard[rowIndex][colIndex] = avtivePlayerSymbol;
  // return updatedBoard;
  // });

  // onSelectedSquare();
  //}

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectedSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
