import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        About EventSpace
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-secondary">Our Mission</h2>
          <p>
          EventSpace is platform for Torontonians to view theikr local events. Wher
          </p>
          <p>
            Whether you're looking for a music festival, a local workshop, a
            networking event, or a grand gala, EventSpace is your go-to
            platform for discovering and experiencing the best events in your
            community and beyond.
          </p>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-secondary">Our Vision</h2>
          <p>
            We envision a world where everyone has easy access to a diverse
            range of events that cater to their interests and passions. We
            strive to be the leading event discovery platform, empowering
            individuals to explore, connect, and engage with the world around
            them.
          </p>
          <p>
            We are committed to providing a user-friendly and intuitive
            experience, making it simple for users to find, register for, and
            share events with their friends and family.
          </p>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-semibold text-secondary">
          What We Offer
        </h2>
        <ul className="list-disc list-inside">
          <li>
            <b>Comprehensive Event Listings:</b> Discover a wide variety of
            events, from local meetups to large-scale festivals.
          </li>
          <li>
            <b>Easy Event Discovery:</b> Our intuitive search and filter
            options help you find the perfect event for you.
          </li>
          <li>
            <b>Secure Registration:</b> Register for events with confidence
            through our secure platform.
          </li>
          <li>
            <b>Community Connection:</b> Connect with other event-goers and
            share your experiences.
          </li>
          <li>
            <b>Personalized Recommendations:</b> Get event suggestions tailored
            to your interests.
          </li>
        </ul>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-semibold text-secondary">
          Join the EventSpace Community
        </h2>
        <p>
          We invite you to explore EventSpace and discover the amazing events
          happening around you. Whether you're an event enthusiast, a
          first-time attendee, or an event organizer, we welcome you to our
          community.
        </p>
        <p>
          If you have any questions or feedback, please don't hesitate to
          <a href="/contact" className="text-primary hover:underline">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
