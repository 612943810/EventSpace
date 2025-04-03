export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: {
    name: string;
    address: string;
    city: string;
  };
  category: string;
  price: number;
  imageUrl: string;
  ticketUrl?: string;
}

export type SortOption = 'date' | 'category' | 'price' | 'location';

export interface EventFilters {
  searchTerm: string;
  category: string;
  sortBy: SortOption;
  priceRange: [number, number];
}
