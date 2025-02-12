'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function SearchBar() {
  const [location, setLocation] = useState('Abuja');
  const [roomType, setRoomType] = useState('Standard');
  const [persons, setPersons] = useState('01');
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  return (
    <div className="w-full container mx-auto bg-white p-6 sm:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-center">
        {/* Location */}
        <div className="w-full">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1C1C1C]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <div className="w-full">
              <label className="block text-sm text-gray-500 font-poppins mb-1">Location</label>
              <select 
                className="block w-full text-gray-900 focus:outline-none font-poppins text-sm"
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

        {/* Room Type */}
        <div className="w-full">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1C1C1C]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            <div className="w-full">
              <label className="block text-sm text-gray-500 font-poppins mb-1">Room type</label>
              <select 
                className="block w-full text-gray-900 focus:outline-none font-poppins text-sm"
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

        {/* Person */}
        <div className="w-full">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1C1C1C]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <div className="w-full">
              <label className="block text-sm text-gray-500 font-poppins mb-1">Person</label>
              <select 
                className="block w-full text-gray-900 focus:outline-none font-poppins text-sm"
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

        {/* Check In */}
        <div className="w-full">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1C1C1C]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <div className="w-full">
              <label className="block text-sm text-gray-500 font-poppins mb-1">Check in</label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                className="w-full text-gray-900 focus:outline-none font-poppins text-sm cursor-pointer"
                dateFormat="dd MMM yyyy"
                minDate={new Date()}
                placeholderText="Select date"
              />
            </div>
          </div>
        </div>

        {/* Check Out */}
        <div className="w-full">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1C1C1C]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <div className="w-full">
              <label className="block text-sm text-gray-500 font-poppins mb-1">Check out</label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                className="w-full text-gray-900 focus:outline-none font-poppins text-sm cursor-pointer"
                dateFormat="dd MMM yyyy"
                minDate={checkIn}
                placeholderText="Select date"
              />
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="w-full">
          <button className="w-full px-6 py-3 bg-[#7C6A46] text-white rounded hover:bg-[#6F5B3E] transition-colors font-poppins text-sm">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}