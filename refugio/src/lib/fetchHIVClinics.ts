import { mockHIVClinics } from "@/data/mockHIVClinics";

export interface HIVClinic {
  PROVIDER_NM: string;
  PROVIDER_ADDR: string;
  PROVIDER_CITY: string;
  PROVIDER_STATE_ABBR: string;
  PROVIDER_ZIP_CD: string;
  LAT_LON: string;
}

export async function fetchHIVClinics(
  lat: number,
  lon: number,
  radius: number,
  token: string
): Promise<HIVClinic[]> {
  console.log("Using mock HIV clinic data.");
  return mockHIVClinics;
}
