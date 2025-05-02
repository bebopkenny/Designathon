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
    </div>
  );
};

export default RightSidebar;
