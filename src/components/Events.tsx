import React from 'react';
import { EventCard } from './EventCard';

export default function Events() {
  const events = [
    {
      title: 'Web Development Workshop',
      date: 'March 15, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Computer Lab 1',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Tech Career Fair',
      date: 'April 5, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Auditorium',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hackathon 2024',
      date: 'May 20-22, 2024',
      time: '48 Hours',
      location: 'Innovation Hub',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="events" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for exciting events that will enhance your skills and expand your network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}