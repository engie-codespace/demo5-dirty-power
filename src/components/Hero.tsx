import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { powerData } from './powerData';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's sparkle your life
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              We offer reliable energy solutions with transparent rates
              and exceptional customer service for over 25 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/energy-types" 
                className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Discover our energy sources
              </Link>
              <Link 
                to="/offers" 
                className="inline-block bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
              >
                View our offers
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-80">
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg shadow-lg flex flex-col items-center justify-center p-8">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-primary mb-2">Calculate your local footprint</h3>
                </div>
                <div className="w-full h-40 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={powerData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="consumption" stroke="#e75480" strokeWidth={3} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <Link 
                  to="/compare" 
                  className="inline-block bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-secondary transition-colors"
                >
                  Compare offers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
