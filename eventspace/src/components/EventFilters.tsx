import { useState, useEffect } from 'react';
import { EventFilters as FilterOptions, SortOption } from '../types/event';
import '../styles/EventFilters.css';

interface EventFiltersProps {
  categories: string[];
  onFilterChange: (filters: FilterOptions) => void;
  initialFilters: FilterOptions;
}

const EventFilters = ({ categories, onFilterChange, initialFilters }: EventFiltersProps) => {
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, searchTerm: e.target.value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, category: e.target.value }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, sortBy: e.target.value as SortOption }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    const newPriceRange = [...filters.priceRange] as [number, number];
    newPriceRange[index] = newValue;
    
    // Ensure min <= max
    if (index === 0 && newPriceRange[0] > newPriceRange[1]) {
      newPriceRange[1] = newPriceRange[0];
    } else if (index === 1 && newPriceRange[1] < newPriceRange[0]) {
      newPriceRange[0] = newPriceRange[1];
    }
    
    setFilters(prev => ({ ...prev, priceRange: newPriceRange }));
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const resetFilters = () => {
    setFilters({
      searchTerm: '',
      category: 'All',
      sortBy: 'date',
      priceRange: [0, 1000]
    });
  };

  return (
    <div className={`event-filters ${expanded ? 'expanded' : ''}`}>
      <div className="filter-header">
        <h2>Find Events</h2>
        <button className="toggle-filters" onClick={toggleExpanded}>
          {expanded ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search events..."
          value={filters.searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="filter-options">
        <div className="filter-group">
          <label htmlFor="category-select">Category</label>
          <select
            id="category-select"
            value={filters.category}
            onChange={handleCategoryChange}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort-select">Sort By</label>
          <select
            id="sort-select"
            value={filters.sortBy}
            onChange={handleSortChange}
          >
            <option value="date">Date</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
            <option value="location">Location</option>
          </select>
        </div>

        <div className="filter-group price-range">
          <label>Price Range</label>
          <div className="price-inputs">
            <div className="price-input-group">
              <span>$</span>
              <input
                type="number"
                min="0"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
              />
            </div>
            <span>to</span>
            <div className="price-input-group">
              <span>$</span>
              <input
                type="number"
                min="0"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
              />
            </div>
          </div>
        </div>

        <button className="reset-filters" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default EventFilters;
