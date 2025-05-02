'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const MapboxMap = dynamic(() => import('./MapboxMap'), { ssr: false});

const page = () => {

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trust Circles: Find Safe Places</h1>
      <MapboxMap />
    </div>
  )
}

export default page