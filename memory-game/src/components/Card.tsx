import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const CARD_STYLES = {
  base: "absolute flex h-full w-full items-center justify-center rounded-xl border-2 backface-hidden",
  front:
    "rotate-y-180 text-2xl xs:text-3xl sm:text-4xl border-purple-200 bg-white",
  back: "border-white/20 bg-pink",
};

type CardProps = {
  emoji: string;
  onClick: () => void;
  isFlipped: boolean;
  isMatched: boolean;
};

function Card({ emoji, isFlipped, isMatched, onClick }: CardProps) {
  return (
    <button
      className="relative h-16 w-16 cursor-pointer xs:h-20 xs:w-20 sm:h-24 sm:w-24"
      onClick={onClick}
    >
      {/* div do 3D */}
      <div
        className={cn(
          "preserve-3d h-full w-full transition-transform duration-500",
          isFlipped && "rotate-y-180",
        )}
      >
        {/* Card back */}
        <div className={cn(CARD_STYLES.base, CARD_STYLES.back)}>
          <Sparkles className="h-6 w-6 animate-pulse text-white sm:h-8 sm:w-8" />
        </div>

        {/* Card front */}
        <div
          className={cn(
            CARD_STYLES.base,
            CARD_STYLES.front,
            isMatched && "bg-gray-300",
          )}
        >
          {emoji}
        </div>
      </div>
    </button>
  );
}

export default Card;
