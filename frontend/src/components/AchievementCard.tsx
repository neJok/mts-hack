import React from 'react';
import { Trophy } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  progress: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, description, progress }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 text-center hover:bg-gray-800/70 transition-colors">
      <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="text-sm font-medium">{progress}</div>
    </div>
  );
}

export default AchievementCard;