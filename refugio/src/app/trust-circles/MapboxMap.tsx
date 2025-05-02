'use client'
import mapboxgl from 'mapbox-gl';
import React, { useState, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { fetchHRSAHealthCenters, HealthCenter } from '@/lib/fetchHealthCenters';
import { fetchHIVClinics, HIVClinic } from '@/lib/fetchHIVClinics';
import { fetchLatinxBusinesses, YelpBusiness } from '@/lib/fetchLatinxBusinesses';
import { mockCommunityCenters } from '@/data/mockCommunityCenters';


mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

interface Props {
  selectedTypes: {
    clinics: boolean;
    hiv: boolean;
    schools: boolean;
    businesses: boolean;
    latinx: boolean;
  };
  selectedRegion: 'la' | 'oc';
  communityFilters: Record<string, boolean>;
}

const REGION_COORDS = {
  la: { lat: 34.0522, lon: -118.2437 },     // Los Angeles
  oc: { lat: 33.7175, lon: -117.8311 },     // Orange County
};



const MapboxMap = ({ selectedTypes, selectedRegion, communityFilters }: Props) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [clinicMarkers, setClinicMarkers] = useState<mapboxgl.Marker[]>([]);
  const [hivMarkers, setHivMarkers] = useState<mapboxgl.Marker[]>([]);
  const [latinxMarkers, setLatinxMarkers] = useState<mapboxgl.Marker[]>([]);

  const LA_CENTER = { lat: 34.0522, lon: -118.2437 };

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [LA_CENTER.lon, LA_CENTER.lat],
      zoom: 10,
    });

    mapRef.current = map;
    return () => map.remove();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
  
    const center = REGION_COORDS[selectedRegion];
    mapRef.current.flyTo({
      center: [center.lon, center.lat],
      zoom: 10,
      essential: true, // for accessibility
    });
  }, [selectedRegion]);
  

  useEffect(() => {
    // Always clear existing markers
    clinicMarkers.forEach(marker => marker.remove());
    setClinicMarkers([]);
  
    // Stop if filter is off
    if (!selectedTypes.clinics) return;
  
    const token = process.env.NEXT_PUBLIC_HRSA_TOKEN!;
    fetchHRSAHealthCenters(LA_CENTER.lat, LA_CENTER.lon, 15, token).then((data) => {
      const newMarkers = data.map((clinic) => {
        if (!clinic.LAT_LON) return null;
        const [latStr, lonStr] = clinic.LAT_LON.split(' ');
        const lat = parseFloat(latStr);
        const lon = parseFloat(lonStr);
        if (isNaN(lat) || isNaN(lon)) return null;
  
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="text-sm">
            <strong>${clinic.SITE_NM}</strong><br/>
            ${clinic.SITE_ADDRESS}<br/>
            ${clinic.SITE_CITY}, ${clinic.SITE_STATE_ABBR} ${clinic.SITE_ZIP_CD}
          </div>
        `);
  
        return new mapboxgl.Marker({ color: '#FF5733' })
          .setLngLat([lon, lat])
          .setPopup(popup)
          .addTo(mapRef.current!);
      }).filter(Boolean) as mapboxgl.Marker[];
  
      setClinicMarkers(newMarkers);
    });
  }, [selectedTypes.clinics]);
    

  useEffect(() => {
    // Remove old markers
    hivMarkers.forEach(marker => marker.remove());
    setHivMarkers([]);
  
    if (!selectedTypes.hiv) return;
  
    const token = process.env.NEXT_PUBLIC_HRSA_TOKEN!;
    fetchHIVClinics(LA_CENTER.lat, LA_CENTER.lon, 15, token).then((data) => {
      // TEMP: Skip filter to make sure markers show
      const filtered = data; // You can re-add filter after verifying
  
      const newMarkers = filtered.map((clinic) => {
        if (!clinic.LAT_LON) return null;
  
        // Parse LAT_LON = "34.05 -118.21"
        const [latStr, lonStr] = clinic.LAT_LON.split(' ');
        const lat = parseFloat(latStr);
        const lon = parseFloat(lonStr);
        if (isNaN(lat) || isNaN(lon)) return null;
  
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="text-sm">
            <strong>${clinic.PROVIDER_NM}</strong><br/>
            ${clinic.PROVIDER_ADDR}<br/>
            ${clinic.PROVIDER_CITY}, ${clinic.PROVIDER_STATE_ABBR} ${clinic.PROVIDER_ZIP_CD}
          </div>
        `);
  
        return new mapboxgl.Marker({ color: '#5A9' })
          .setLngLat([lon, lat]) // Mapbox needs [lng, lat]
          .setPopup(popup)
          .addTo(mapRef.current!);
      }).filter(Boolean) as mapboxgl.Marker[];
  
      setHivMarkers(newMarkers);
    });
  }, [selectedTypes.hiv]);
  
  useEffect(() => {
    latinxMarkers.forEach(marker => marker.remove());
    setLatinxMarkers([]);
  
    if (!selectedTypes.latinx) return;
  
    const REGIONS =
      selectedRegion === 'la'
        ? [
            { lat: 34.0522, lon: -118.2437 }, // LA
            { lat: 34.0739, lon: -118.2400 },
            { lat: 34.0453, lon: -118.2350 }
          ]
        : [
            { lat: 33.7455, lon: -117.8677 }, // OC
            { lat: 33.8366, lon: -117.9143 },
            { lat: 33.6019, lon: -117.8732 }
          ];
  
    const radius = 15000;
  
    Promise.all(REGIONS.map(({ lat, lon }) =>
      fetchLatinxBusinesses(lat, lon, radius)
    )).then(regionResults => {
      const combined = regionResults.flat();

      const filtered = combined; // use all of them directly

        console.log("Fetched Latinx businesses:", combined);
        console.log("Filtered Latinx businesses:", filtered);

      const newMarkers = filtered.map((biz) => {
        if (!biz.coordinates) return null;
  
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="text-sm">
            <strong>${biz.name}</strong><br/>
            ${biz.location.address1}<br/>
            ${biz.location.city}, ${biz.location.state} ${biz.location.zip_code}<br/>
            <a href="${biz.url}" target="_blank" class="text-blue-600 underline">View on Yelp</a>
          </div>
        `);


  
        return new mapboxgl.Marker({ color: '#d97706' })
          .setLngLat([biz.coordinates.longitude, biz.coordinates.latitude])
          .setPopup(popup)
          .addTo(mapRef.current!);
      }).filter(Boolean) as mapboxgl.Marker[];
  
      setLatinxMarkers(newMarkers);
    });
  }, [selectedTypes.latinx, selectedRegion]);
  
  useEffect(() => {
    // Remove previous community markers (you can use a state if you want individual categories later)
    const markers: mapboxgl.Marker[] = [];
  
    if (!communityFilters["Youth Programs"]) return;
  
    const centers = mockCommunityCenters.filter(
      (c) => c.category === "Youth Programs"
    );
  
    centers.forEach((center) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="text-sm">
          <strong>${center.name}</strong><br/>
          ${center.address}
        </div>
      `);
  
      const marker = new mapboxgl.Marker({ color: '#9333ea' }) // violet
        .setLngLat([center.lon, center.lat])
        .setPopup(popup)
        .addTo(mapRef.current!);
  
      markers.push(marker);
    });
  
    // Optional: save markers to state if you want to remove them later
    return () => markers.forEach((m) => m.remove());
  }, [communityFilters["Youth Programs"]]);
  
  return (
    <div ref={mapContainer} className="w-full h-[600px] rounded-xl shadow-lg" />
  );
};

export default MapboxMap;
