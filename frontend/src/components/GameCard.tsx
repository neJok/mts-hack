import React from 'react';
import { GamepadIcon } from 'lucide-react';

interface GameCardProps {
  title: string;
  duration: string;
  path: string
}

const GameCard: React.FC<GameCardProps> = ({ title, duration, path }) => {
  return (
    <a href={path} className="bg-gray-800/50 rounded-lg p-6 text-center hover:bg-gray-800/70 transition-colors cursor-pointer">
      <GamepadIcon className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-base font-light mb-2">{title}</h3>
      <p className="text-sm font-extralight opacity-80">{duration}</p>
    </a>
  );
}

export default GameCard;