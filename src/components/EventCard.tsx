import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export function EventCard({ title, date, time, location, image }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
}