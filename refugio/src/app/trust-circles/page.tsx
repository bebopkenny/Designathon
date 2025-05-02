'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import RightSidebar from './RightSidebar';
import Navbar from '@/components/Navbar';

const MapboxMap = dynamic(() => import('./MapboxMap'), { ssr: false });

const Page = () => {
  const [selectedTypes, setSelectedTypes] = useState({
    clinics: false,
    hiv: false,
    schools: false,
    businesses: false,
    latinx: false,
  });

  const [selectedRegion, setSelectedRegion] = useState<'la' | 'oc'>('la');
  const [communityFilters, setCommunityFilters] = useState<Record<string, boolean>>({});

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
    <div className="flex flex-1 overflow-hidden">
      <div className="flex-1 relative">
        <MapboxMap
            selectedTypes={selectedTypes}
            selectedRegion={selectedRegion}
            communityFilters={communityFilters}
        />
        </div>
        <RightSidebar
          selectedTypes={{
            clinics: selectedTypes.clinics,
            hiv: selectedTypes.hiv,
            latinx: selectedTypes.latinx,
          }}
          setSelectedTypes={(update) => {
            setSelectedTypes((prev) => ({
              ...prev,
              ...typeof update === 'function' ? update(prev) : update
            }));
          }}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          communityFilters={communityFilters}
          setCommunityFilters={setCommunityFilters}
        />
      </div>
    </div>
  );
};

export default Page;
