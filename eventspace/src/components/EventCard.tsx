import { Event } from '../types/event';
import '../styles/EventCard.css';

interface EventCardProps {
  event: Event;
  onClick: (id: string) => void;
}

const EventCard = ({ event, onClick }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-CA', options);
  };

  return (
    <div className="event-card" onClick={() => onClick(event.id)}>
      <div className="event-image-container">
        <img src={event.imageUrl} alt={event.title} className="event-image" />
        <div className="event-category">{event.category}</div>
      </div>
      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <div className="event-details">
          <div className="event-date">
            <i className="icon-calendar"></i>
            {formatDate(event.date)} • {event.time}
          </div>
          <div className="event-location">
            <i className="icon-location"></i>
            {event.location.name}
          </div>
          <div className="event-price">
            <i className="icon-ticket"></i>
            {event.price === 0 ? 'Free' : `$${event.price}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
