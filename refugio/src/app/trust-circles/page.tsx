'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import RightSidebar from './RightSidebar';

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trust Circles: Find Safe Places</h1>
      <div className="flex gap-4">
        <div className="flex-1">
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
