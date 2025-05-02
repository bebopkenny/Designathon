// src/app/api/yelp/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { lat, lon, radius } = await req.json();
  const apiKey = process.env.NEXT_PUBLIC_YELP_TOKEN;

  // Use a keyword search instead of the attribute filter
  const terms = ['latino', 'mexican', 'taqueria', 'panaderia', 'comida', 'salvadoran', 'guatemalan', 'bodega', 'hispanic'];

  const allResults = await Promise.all(
    terms.map(async (term) => {
      const url = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&radius=${radius}&term=${term}&categories=restaurants`;

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const data = await res.json();
      return data.businesses || [];
    })
  );

  // Flatten and deduplicate results
  const combined = allResults.flat();
  const unique = Array.from(new Map(combined.map(b => [b.id, b])).values());

  return NextResponse.json({ businesses: unique });
}
