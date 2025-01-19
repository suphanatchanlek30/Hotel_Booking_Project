'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [location, setLocation] = useState('Abuja');
  const [roomType, setRoomType] = useState('Standard');
  const [persons, setPersons] = useState('01');
  const [checkIn, setCheckIn] = useState('09 mar 2023');
  const [checkOut, setCheckOut] = useState('13 mar 2023');

  return (
    <div className="w-full container mx-auto bg-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Location */}
      <div className="w-full md:w-auto">
        <div className="relative">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <div>
              <label className="block text-sm text-gray-500">Location</label>
              <select 
                className="block w-full text-gray-900 focus:outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>Abuja</option>
                <option>Lagos</option>
                <option>Port Harcourt</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Room Type */}
      <div className="w-full md:w-auto">
        <div className="relative">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            <div>
              <label className="block text-sm text-gray-500">Room type</label>
              <select 
                className="block w-full text-gray-900 focus:outline-none"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option>Standard</option>
                <option>Deluxe</option>
                <option>Suite</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Person */}
      <div className="w-full md:w-auto">
        <div className="relative">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <div>
              <label className="block text-sm text-gray-500">Person</label>
              <select 
                className="block w-full text-gray-900 focus:outline-none"
                value={persons}
                onChange={(e) => setPersons(e.target.value)}
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Check In */}
      <div className="w-full md:w-auto">
        <div className="relative">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <div>
              <label className="block text-sm text-gray-500">Check in</label>
              <input 
                type="text" 
                className="block w-full text-gray-900 focus:outline-none"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Check Out */}
      <div className="w-full md:w-auto">
        <div className="relative">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <div>
              <label className="block text-sm text-gray-500">Check out</label>
              <input 
                type="text" 
                className="block w-full text-gray-900 focus:outline-none"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <button className="w-full md:w-auto px-6 py-2 bg-[#8B7355] text-white rounded hover:bg-[#6F5B3E]">
        Book Now
      </button>
    </div>
  );
}