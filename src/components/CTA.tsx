import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Toaster, toast } from 'react-hot-toast';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addDoc(collection(db, 'waitlist'), {
        email,
        timestamp: new Date()
      });

      toast.success('Thanks for joining our waitlist! We look forward to seeing you on the inside.', {
        duration: 5000,
        style: {
          background: '#4B5563',
          color: '#fff',
        },
      });

      setEmail('');
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Oops! Something went wrong. Please try again.', {
        duration: 5000,
        style: {
          background: '#4B5563',
          color: '#fff',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="join" className="container mx-auto px-4 py-20 text-center">
      <Toaster position="top-center" />
      <h2 className="text-4xl font-bold mb-6 gradient-text">Join the Waitlist</h2>
      <p className="text-xl mb-8 text-gray-300">Be the first to experience the future of nightlife payments</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white px-6 py-2 rounded-r-full font-semibold hover:bg-blue-600 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Joining...' : 'Join Now'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CTA;