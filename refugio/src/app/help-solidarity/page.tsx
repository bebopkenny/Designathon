'use client';
import React from 'react';
import WaysToHelp from './WaysToHelp';
import Navbar from '@/components/Navbar';

const HelpSolidarityPage = () => {
  return (
    <>
        <Navbar />
            <div className="min-h-screen bg-white px-6 py-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Almas Unidas: Help & Solidarity
            </h1>
            <WaysToHelp />
            </div>
    </>    
  );
};

export default HelpSolidarityPage;