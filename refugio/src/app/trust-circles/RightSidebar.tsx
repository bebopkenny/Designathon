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
    <div className="w-72 max-h-full overflow-y-auto bg-[#111827] border-l border-gray-800 p-5 shadow-xl rounded-l-xl text-sm text-gray-100 space-y-6">
      <h2 className="text-xl font-semibold text-white tracking-wide">Filter Places</h2>
  
      {/* Core Filters */}
      <div className="space-y-3">
        {Object.entries(selectedTypes).map(([type, isActive]) => (
          <label
            key={type}
            className="flex items-center justify-between bg-[#1f2937] rounded-md px-3 py-2 hover:bg-[#374151] transition"
          >
            <span className="capitalize">{type}</span>
            <input
              type="checkbox"
              checked={isActive}
              onChange={() => handleToggle(type as keyof typeof selectedTypes)}
              className="w-4 h-4 accent-orange-400"
            />
          </label>
        ))}
      </div>
  
      {/* Region Selector */}
      <div className="bg-[#1f2937] rounded-md p-3 space-y-1">
        <p className="font-medium text-gray-300">Latinx Region</p>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value as 'la' | 'oc')}
          className="w-full bg-[#111827] border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none"
        >
          <option value="la">Los Angeles</option>
          <option value="oc">Orange County</option>
        </select>
      </div>
  
      {/* Community Filters */}
      <div className="bg-[#1f2937] rounded-md p-3">
        <p className="font-medium mb-2 text-gray-300">Community Support</p>
        <div className="max-h-44 overflow-y-auto space-y-2 pr-1">
          {communityOptions.map((key) => (
            <label
              key={key}
              className="flex items-center justify-between hover:bg-[#374151] px-2 py-1 rounded transition"
            >
              <span>{key}</span>
              <input
                type="checkbox"
                checked={communityFilters[key] || false}
                onChange={() => handleCommunityToggle(key)}
                className="w-4 h-4 accent-orange-400"
              />
            </label>
          ))}
        </div>
      </div>
  
      {/* Map Legend */}
      <div className="space-y-4 text-xs text-gray-300">
        <div>
          <p className="font-medium mb-1 text-gray-100">Map Legend</p>
          <ul className="space-y-1">
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
  
        <div>
          <p className="font-medium mb-1 text-gray-100">Health & Safety</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5733]" /> Clinics
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#5A9]" /> HIV Care Providers
            </li>
          </ul>
        </div>
  
        <div>
          <p className="font-medium mb-1 text-gray-100">Local Businesses</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#d97706]" /> Latinx-Owned Restaurants
            </li>
          </ul>
        </div>
      </div>
    </div>
  );  
  
};

export default RightSidebar;
