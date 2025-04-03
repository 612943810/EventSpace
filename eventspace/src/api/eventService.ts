import { Event, EventFilters, SortOption } from '../types/event';

// Mock data for development
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Toronto Jazz Festival',
    description: 'Annual jazz festival featuring local and international artists across multiple venues in downtown Toronto.',
    date: '2025-06-18',
    time: '19:00',
    location: {
      name: 'Nathan Phillips Square',
      address: '100 Queen St W',
      city: 'Toronto'
    },
    category: 'Music',
    price: 45,
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Toronto Food Festival',
    description: 'Experience the diverse culinary scene of Toronto with food from over 50 local restaurants and food trucks.',
    date: '2025-05-12',
    time: '11:00',
    location: {
      name: 'Distillery District',
      address: '55 Mill St',
      city: 'Toronto'
    },
    category: 'Food',
    price: 25,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Toronto Art Exhibition',
    description: 'Contemporary art exhibition featuring works from emerging Canadian artists.',
    date: '2025-04-28',
    time: '10:00',
    location: {
      name: 'Art Gallery of Ontario',
      address: '317 Dundas St W',
      city: 'Toronto'
    },
    category: 'Art',
    price: 30,
    imageUrl: 'https://images.unsplash.com/photo-1531913764164-f85c52d7e6a9?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    title: 'Tech Conference 2025',
    description: 'Annual technology conference with keynotes, workshops, and networking opportunities.',
    date: '2025-09-15',
    time: '09:00',
    location: {
      name: 'Metro Toronto Convention Centre',
      address: '255 Front St W',
      city: 'Toronto'
    },
    category: 'Technology',
    price: 150,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
  },
  {
    id: '5',
    title: 'Toronto Film Festival',
    description: 'Screening of independent films from around the world with Q&A sessions with directors and actors.',
    date: '2025-07-22',
    time: '18:30',
    location: {
      name: 'TIFF Bell Lightbox',
      address: '350 King St W',
      city: 'Toronto'
    },
    category: 'Film',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80'
  },
  {
    id: '6',
    title: 'Toronto Comedy Night',
    description: 'A night of stand-up comedy featuring top comedians from Canada and beyond.',
    date: '2025-05-05',
    time: '20:00',
    location: {
      name: 'The Second City',
      address: '51 Mercer St',
      city: 'Toronto'
    },
    category: 'Comedy',
    price: 40,
    imageUrl: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&q=80'
  },
  {
    id: '7',
    title: 'Toronto Marathon',
    description: 'Annual marathon through the streets of Toronto. Participants can choose between full marathon, half marathon, or 10K.',
    date: '2025-10-17',
    time: '07:00',
    location: {
      name: 'Exhibition Place',
      address: '100 Princes\' Blvd',
      city: 'Toronto'
    },
    category: 'Sports',
    price: 80,
    imageUrl: 'https://images.unsplash.com/photo-1530137073521-0219129df456?auto=format&fit=crop&q=80'
  },
  {
    id: '8',
    title: 'Toronto Book Fair',
    description: 'Annual book fair with author readings, book signings, and panel discussions.',
    date: '2025-08-10',
    time: '10:00',
    location: {
      name: 'Harbourfront Centre',
      address: '235 Queens Quay W',
      city: 'Toronto'
    },
    category: 'Literature',
    price: 15,
    imageUrl: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&q=80'
  }
];

export const getEvents = async (): Promise<Event[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEvents);
    }, 500); // Simulate network delay
  });
};

export const getEventById = async (id: string): Promise<Event | undefined> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const event = mockEvents.find(event => event.id === id);
      resolve(event);
    }, 300);
  });
};

export const filterEvents = (events: Event[], filters: EventFilters): Event[] => {
  let filteredEvents = [...events];
  
  // Filter by search term
  if (filters.searchTerm) {
    const searchLower = filters.searchTerm.toLowerCase();
    filteredEvents = filteredEvents.filter(event => 
      event.title.toLowerCase().includes(searchLower) || 
      event.description.toLowerCase().includes(searchLower)
    );
  }
  
  // Filter by category
  if (filters.category && filters.category !== 'All') {
    filteredEvents = filteredEvents.filter(event => 
      event.category === filters.category
    );
  }
  
  // Filter by price range
  if (filters.priceRange[0] > 0 || filters.priceRange[1] < Infinity) {
    filteredEvents = filteredEvents.filter(event => 
      event.price >= filters.priceRange[0] && event.price <= filters.priceRange[1]
    );
  }
  
  // Sort events
  filteredEvents = sortEvents(filteredEvents, filters.sortBy);
  
  return filteredEvents;
};

export const sortEvents = (events: Event[], sortBy: SortOption): Event[] => {
  const sortedEvents = [...events];
  
  switch (sortBy) {
    case 'date':
      return sortedEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    case 'price':
      return sortedEvents.sort((a, b) => a.price - b.price);
    case 'category':
      return sortedEvents.sort((a, b) => a.category.localeCompare(b.category));
    case 'location':
      return sortedEvents.sort((a, b) => a.location.name.localeCompare(b.location.name));
    default:
      return sortedEvents;
  }
};

export const getCategories = (events: Event[]): string[] => {
  const categories = events.map(event => event.category);
  return ['All', ...Array.from(new Set(categories))];
};
