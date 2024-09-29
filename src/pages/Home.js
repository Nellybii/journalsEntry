import React from 'react';
import Header from '../components/Header'; // Assuming Header includes a nav bar
import '../styles/home.css';

const Home = () => {
  return (
    <div> 
        <Header />
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to Your Journal</h1>
          <p className="text-lg text-gray-600 mb-8">
            Capture your thoughts, memories, and ideas in one place.
          </p>
          <div className="flex justify-center">
            <a
              href="/login"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Get Started
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Journal is Your Space</h2>
          <p className="text-gray-600 mb-8">
            Access your journal entries and insights anytime, anywhere. Create a personalized experience that reflects your unique perspective.
          </p>
        </section>

        <section className="flex flex-wrap justify-center gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Entries</h2>
            <img
              src="https://i0.wp.com/dayoneapp.com/wp-content/uploads/2021/10/01-1-day-one-main-screen@2x.png?w=600&quality=80&ssl=1"
              alt="Journal Entry"
              className="img-responsive w-full mb-4"
            />
            <p className="text-gray-600">
              Easily create journal entries to capture your thoughts and ideas whenever inspiration strikes.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Reflect & Organize</h2>
            <img
              src="https://images.stockcake.com/public/1/a/9/1a93e22d-cc94-46e6-bc83-724a4861659d_large/journaling-serene-moment-stockcake.jpg"
              alt="Reflect and Organize"
              className="img-responsive w-full mb-4"
            />
            <p className="text-gray-600">
              Reflect on your past entries and organize them into categories to find your insights quickly.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Share Your Journey</h2>
            <img
              src="https://i0.wp.com/dayoneapp.com/wp-content/uploads/2021/10/02-1-day-one-backups-to-servers@2x.png?w=600&quality=80&ssl=1"
              alt="Reflect and Organize"
              className="img-responsive w-full mb-4"
            />
            <p className="text-gray-600">
              Share your thoughts and experiences with friends or keep them private, it's up to you!
            </p>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
};

export default Home;
