export interface YelpBusiness {
    name: string;
    location: {
      address1: string;
      city: string;
      state: string;
      zip_code: string;
    };
    coordinates: {
      latitude: number;
      longitude: number;
    };
    url: string;
  }
  
  export async function fetchLatinxBusinesses(lat: number, lon: number, radius: number): Promise<YelpBusiness[]> {
    const res = await fetch('/api/yelp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lat, lon, radius }),
    });
  
    if (!res.ok) {
      console.error('Failed to fetch Yelp data');
      return [];
    }
  
    const data = await res.json();
    return data.businesses || [];
  }
  