import { ANIMATIONS, EASY, HARD, MEDIUM } from "@/constants";
import { Card as CardType, type Difficulty } from "@/types";
import Card from "./Card";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type GameBoardProps = {
  cards: CardType[];
  difficulty: Difficulty;
  onCardClick: (id: number) => void;
};

const GRID_CONFIG = {
  [EASY]: "",
  [MEDIUM]: "sm:grid-cols-5",
  [HARD]: "sm:grid-cols-5 md:grid-cols-6",
};

function GameBoard({ cards, onCardClick, difficulty }: GameBoardProps) {
  return (
    <motion.div
      {...ANIMATIONS.fadeInUp}
      className={cn(
        GRID_CONFIG[difficulty],
        "grid grid-cols-4 gap-2 rounded-xl bg-blue-100 p-2 sm:gap-4 sm:p-4",
      )}
    >
      {cards.map((card) => (
        <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />
      ))}
    </motion.div>
  );
}

export default GameBoard;
