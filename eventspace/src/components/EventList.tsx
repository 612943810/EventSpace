import { useState } from 'react';
import { Event } from '../types/event';
import EventCard from './EventCard';
import EventDetails from './EventDetails';
import '../styles/EventList.css';

interface EventListProps {
  events: Event[];
}

const EventList = ({ events }: EventListProps) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (id: string) => {
    const event = events.find(e => e.id === id);
    if (event) {
      setSelectedEvent(event);
    }
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="event-list-container">
      {events.length === 0 ? (
        <div className="no-events">
          <h3>No events found</h3>
          <p>Try adjusting your filters or search criteria</p>
        </div>
      ) : (
        <div className="event-list">
          {events.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              onClick={handleEventClick} 
            />
          ))}
        </div>
      )}

      {selectedEvent && (
        <EventDetails 
          event={selectedEvent} 
          onClose={closeEventDetails} 
        />
      )}
    </div>
  );
};

export default EventList;
