import React from 'react';

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <section className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Explore a world of events and experiences tailored just for you.
        </p>
        <a
          href="/events"
          className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary-dark transition-colors"
        >
          Browse Events
        </a>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-secondary mb-6">
          Featured Events
        </h2>
        {/* Placeholder for featured events - replace with actual event data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Event 1
            </h3>
            <p className="text-gray-600">
              Description of Event 1. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Event 2
            </h3>
            <p className="text-gray-600">
              Description of Event 2. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Event 3
            </h3>
            <p className="text-gray-600">
              Description of Event 3. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-secondary mb-6">
          Why Choose EventSpace?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Wide Selection
            </h3>
            <p className="text-gray-600">
              Discover a diverse range of events, from music festivals to
              workshops.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Easy to Use
            </h3>
            <p className="text-gray-600">
              Our platform is designed to make finding and registering for
              events simple.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Community Focused
            </h3>
            <p className="text-gray-600">
              Connect with other event-goers and share your experiences.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
