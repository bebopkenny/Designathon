export interface HealthCenter {
    SITE_NM: string;
    SITE_ADDRESS: string;
    SITE_CITY: string;
    SITE_STATE_ABBR: string;
    SITE_ZIP_CD: string;
    LAT_LON: string;
  }
  
  interface HRSAResponse {
    HCC: HealthCenter[];
  }
  
  export async function fetchHRSAHealthCenters(
    lat: number,
    lon: number,
    radius: number,
    token: string
  ): Promise<HealthCenter[]> {
    const url = 'https://data.hrsa.gov/HDWAPI3_External/api/v1/GetHealthCentersAroundALocation';
  
    const body = {
      Latitude: lat,
      Longitude: lon,
      Radius: radius,
      MinRecs: 10,
      MaxRadius: radius,
      RadiusIncrement: 5,
      Token: token,
    };
  
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
    if (!res.ok) {
      console.error('HRSA API error:', await res.text());
      return [];
    }
  
    const data: HRSAResponse = await res.json();
    return data.HCC || [];
  }
  