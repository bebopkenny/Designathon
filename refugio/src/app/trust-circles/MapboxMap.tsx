'use client'
import mapboxgl from 'mapbox-gl';
import React, { useState, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { fetchHRSAHealthCenters, HealthCenter } from '@/lib/fetchHealthCenters';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

const MapboxMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [clinics, setClinics] = useState<HealthCenter[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-118.2437, 34.0522], // Los Angeles
      zoom: 10,
    });

    mapRef.current = map;

    return () => map.remove();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const token = process.env.NEXT_PUBLIC_HRSA_TOKEN!;
      const data = await fetchHRSAHealthCenters(34.0522, -118.2437, 15, token);
      setClinics(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    clinics.forEach((clinic) => {
      if (!clinic.LAT_LON) return;

      const [latStr, lonStr] = clinic.LAT_LON.split(' ');
      const lat = parseFloat(latStr);
      const lon = parseFloat(lonStr);
      if (isNaN(lat) || isNaN(lon)) return;

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="text-sm">
          <strong>${clinic.SITE_NM}</strong><br/>
          ${clinic.SITE_ADDRESS}<br/>
          ${clinic.SITE_CITY}, ${clinic.SITE_STATE_ABBR} ${clinic.SITE_ZIP_CD}
        </div>
      `);

      new mapboxgl.Marker({ color: '#FF5733' })
        .setLngLat([lon, lat])
        .setPopup(popup)
        .addTo(mapRef.current!);
    });
  }, [clinics]);

  return (
    <div ref={mapContainer} className="w-full h-[600px] rounded-xl shadow-lg" />
  );
};

export default MapboxMap;
