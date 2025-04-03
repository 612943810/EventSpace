import { useState, useEffect } from 'react';
import { Event, EventFilters as FilterOptions } from '../types/event';
import { getEvents, filterEvents, getCategories } from '../api/eventService';
import EventFilters from '../components/EventFilters';
import EventList from '../components/EventList';
import '../styles/EventsPage.css';

const EventsPage = () => {
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: '',
    category: 'All',
    sortBy: 'date',
    priceRange: [0, 1000]
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const events = await getEvents();
        setAllEvents(events);
        setFilteredEvents(events);
        setCategories(getCategories(events));
        setLoading(false);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (allEvents.length > 0) {
      const filtered = filterEvents(allEvents, filters);
      setFilteredEvents(filtered);
    }
  }, [filters, allEvents]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  if (loading) {
    return <div className="loading">Loading events...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="events-page">
      <header className="events-header">
        <h1>Toronto Events</h1>
        <p>Discover exciting events happening in Toronto</p>
      </header>

      <main className="events-main">
        <EventFilters 
          categories={categories}
          onFilterChange={handleFilterChange}
          initialFilters={filters}
        />
        
        <div className="events-results">
          <div className="events-count">
            {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
          </div>
          
          <EventList 
            events={filteredEvents}
            filters={filters}
          />
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
