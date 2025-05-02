'use client'
import React from 'react';

interface Props {
    selectedTypes: {
      clinics: boolean;
      hiv: boolean;
      latinx: boolean;
    };
  
      
  setSelectedTypes: React.Dispatch<React.SetStateAction<Props['selectedTypes']>>;
  selectedRegion: 'la' | 'oc';
  setSelectedRegion: React.Dispatch<React.SetStateAction<'la' | 'oc'>>;
  communityFilters: Record<string, boolean>;
  setCommunityFilters: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

const communityOptions = [
  'Youth Programs',
  'Sanctuary Faith Spaces',
  'Cultural Centers',
  'Daycares',
  'Sports Fields'
];

const RightSidebar = ({
  selectedTypes,
  setSelectedTypes,
  selectedRegion,
  setSelectedRegion,
  communityFilters,
  setCommunityFilters
}: Props) => {
  const handleToggle = (type: keyof typeof selectedTypes) => {
    setSelectedTypes(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const handleCommunityToggle = (key: string) => {
    setCommunityFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-64 bg-white border rounded-xl p-4 shadow-md text-sm space-y-4">
      <h2 className="font-bold text-lg">Filter Places</h2>

      {/* Core Filters */}
      {Object.entries(selectedTypes).map(([type, isActive]) => (
        <label key={type} className="flex items-center justify-between">
          <span className="capitalize">{type}</span>
          <input
            type="checkbox"
            checked={isActive}
            onChange={() => handleToggle(type as keyof typeof selectedTypes)}
            className="w-4 h-4"
          />
        </label>
      ))}

      {/* Region Dropdown */}
      <div className="mt-4">
        <p className="font-semibold mb-1">Latinx Region</p>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value as 'la' | 'oc')}
          className="w-full border rounded px-2 py-1"
        >
          <option value="la">Los Angeles</option>
          <option value="oc">Orange County</option>
        </select>
      </div>

      {/* Scrollable Community Filters */}
      <div className="mt-4">
        <p className="font-semibold mb-1">Community Support</p>
        <div className="max-h-44 overflow-y-auto space-y-2">
          {communityOptions.map((key) => (
            <label key={key} className="flex items-center justify-between">
              <span>{key}</span>
              <input
                type="checkbox"
                checked={communityFilters[key] || false}
                onChange={() => handleCommunityToggle(key)}
                className="w-4 h-4"
              />
            </label>
          ))}
        </div>
      </div>
      {/* Legend for category colors */}
    <div className="mt-4">
    <p className="font-semibold mb-1">Map Legend</p>
    <ul className="space-y-1 text-xs">
        <li className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#22c55e]" /> Youth Programs
        </li>
        <li className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#8b5cf6]" /> Sanctuary Faith Spaces
        </li>
        <li className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#ec4899]" /> Cultural Centers
        </li>
        <li className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#f59e0b]" /> Daycares
        </li>
        <li className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#3b82f6]" /> Sports Fields
        </li>
    </ul>
    </div>
    <div className="mt-4">
  <p className="font-semibold mb-1">Health & Safety</p>
  <ul className="space-y-1 text-xs">
    <li className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#FF5733]" /> Clinics
    </li>
    <li className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#5A9]" /> HIV Care Providers
    </li>
  </ul>
</div>

<div className="mt-4">
  <p className="font-semibold mb-1">Local Businesses</p>
  <ul className="space-y-1 text-xs">
    <li className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#d97706]" /> Latinx-Owned Restaurants
    </li>
  </ul>
</div>
    </div>
  );
};

export default RightSidebar;
