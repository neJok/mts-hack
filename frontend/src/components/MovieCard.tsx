import React from 'react';
import { Star } from 'lucide-react';

interface MovieCardProps {
  title: string;
  rating: number;
  type: string;
  imageUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, rating, type, imageUrl }) => {
  return (
    <div className="relative group">
      <div className="aspect-[2/3] rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <div className="flex items-center space-x-2 text-sm">
          <Star size={16} className="text-yellow-500" />
          <span>{rating}</span>
          <span className="text-gray-500">/</span>
          <span className="text-[#51C26D]"> {type}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;