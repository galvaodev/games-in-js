import { WINNING_COMBINATIONS } from "../helpers/game-logic";
import type { BoardState, Player } from "../types";
import Square from "./Square";

type BoardProps = {
  board: BoardState;
  onClick: (index: number) => void;
  winner: Player | null;
};

function Board({ board, onClick, winner }: BoardProps) {
  const isWinner = (index: number): boolean => {
    if (!winner) return false;

    return WINNING_COMBINATIONS.some(
      (combo) =>
        combo.includes(index) && combo.every((i) => board[i] === winner),
    );
  };

  return (
    <div className="mx-auto grid max-w-[26rem] grid-cols-3 gap-4">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          isWinner={isWinner(index)}
        />
      ))}
    </div>
  );
}

export default Board;
