import GameBoard from "./components/GameBoard";
import GameModal from "./components/GameModal";
import ScoreBoard from "./components/ScoreBoard";
import DifficultySelector from "@/components/DifficultySelector";
import { useMemoryGame } from "@/hooks/use-memory-game";
import { formatTime } from "./lib/formatTime";
import type { Difficulty } from "./types";
import { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  const { cards, handleCardClick, time, moves, resetGame, gameCompleted } =
    useMemoryGame(difficulty || "easy");

  const formattedTime = formatTime(time);

  const handleRestart = () => {
    setDifficulty(null);
    resetGame();
  };

  if (!difficulty) return <DifficultySelector onSelect={setDifficulty} />;

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-blue-200 p-4 sm:gap-8 sm:p-8">
      <ScoreBoard
        moves={moves}
        time={formattedTime}
        onRestart={handleRestart}
      />
      <GameBoard
        difficulty={difficulty}
        cards={cards}
        onCardClick={handleCardClick}
      />

      {gameCompleted && (
        <GameModal
          moves={moves}
          time={formattedTime}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
