import GameBoard from "./components/GameBoard";
import GameModal from "./components/GameModal";
import ScoreBoard from "./components/ScoreBoard";
import DifficultySelector from "@/components/DifficultySelector";

function App() {
  const gameCompleted = false;

  const difficulty = "hard";

  if (!difficulty) return <DifficultySelector />;

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-blue-200 p-4 sm:gap-8 sm:p-8">
      <ScoreBoard moves={0} time={0} onRestart={() => {}} />
      <GameBoard />

      {gameCompleted && <GameModal moves={10} time={0} onRestart={() => {}} />}
    </div>
  );
}

export default App;
