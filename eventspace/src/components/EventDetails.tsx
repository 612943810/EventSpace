import { Event } from '../types/event';
import '../styles/EventDetails.css';

interface EventDetailsProps {
  event: Event;
  onClose: () => void;
}

const EventDetails = ({ event, onClose }: EventDetailsProps) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-CA', options);
  };

  return (
    <div className="event-details-overlay">
      <div className="event-details-modal">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="event-details-content">
          <div className="event-details-image-container">
            <img src={event.imageUrl} alt={event.title} className="event-details-image" />
            <div className="event-details-category">{event.category}</div>
          </div>
          
          <div className="event-details-info">
            <h2 className="event-details-title">{event.title}</h2>
            
            <div className="event-details-metadata">
              <div className="event-details-item">
                <i className="icon-calendar"></i>
                <div>
                  <strong>Date & Time</strong>
                  <p>{formatDate(event.date)} • {event.time}</p>
                </div>
              </div>
              
              <div className="event-details-item">
                <i className="icon-location"></i>
                <div>
                  <strong>Location</strong>
                  <p>{event.location.name}</p>
                  <p>{event.location.address}, {event.location.city}</p>
                </div>
              </div>
              
              <div className="event-details-item">
                <i className="icon-ticket"></i>
                <div>
                  <strong>Price</strong>
                  <p>{event.price === 0 ? 'Free' : `$${event.price}`}</p>
                </div>
              </div>
            </div>
            
            <div className="event-details-description">
              <h3>About This Event</h3>
              <p>{event.description}</p>
            </div>
            
            {event.ticketUrl && (
              <a 
                href={event.ticketUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="event-details-ticket-button"
              >
                Get Tickets
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
