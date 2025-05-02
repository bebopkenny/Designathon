'use client'
import React from 'react'
import '@/styles/globals.css'
import CommunityImage from '@/images/community.png'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <Navbar />

      {/* GRADIENT HERO */}
      <div className="bg-gradient-to-b from-blue-50 via-white to-white pb-20">
        <main className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-12">
          {/* HERO TEXT */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 mb-4">
              Empowering the <span className="text-blue-700">Latinx community</span><br />
              to stay connected and safe
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-md mx-auto md:mx-0">
              Protect your family. Find your community. Rebuild your connections.
            </p>
            <Link href="/help-solidarity">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition">
                Get Involved
              </button>
            </Link>
          </div>

          {/* HERO IMAGE */}
          <div className="flex-1">
            <Link href="/">
              <img
                src={CommunityImage.src}
                alt="Latinx community illustration"
                className="rounded-xl shadow-lg hover:opacity-90 transition cursor-pointer w-full max-w-md mx-auto"
              />
            </Link>
          </div>
        </main>

        {/* FLAG SCROLLER - Replacing Stats */}
        <div className="scroll-container">
  <div className="wrapper">
    <div className="item item1">
      <img src="https://flagcdn.com/w320/mx.png" alt="Mexico" className="flag-img" />
    </div>
    <div className="item item2">
      <img src="https://flagcdn.com/w320/ar.png" alt="Argentina" className="flag-img" />
    </div>
    <div className="item item3">
      <img src="https://flagcdn.com/w320/cl.png" alt="Chile" className="flag-img" />
    </div>
    <div className="item item4">
      <img src="https://flagcdn.com/w320/co.png" alt="Colombia" className="flag-img" />
    </div>
    <div className="item item5">
      <img src="https://flagcdn.com/w320/cu.png" alt="Cuba" className="flag-img" />
    </div>
    <div className="item item6">
      <img src="https://flagcdn.com/w320/do.png" alt="Dominican Republic" className="flag-img" />
    </div>
    <div className="item item7">
      <img src="https://flagcdn.com/w320/pe.png" alt="Peru" className="flag-img" />
    </div>
    <div className="item item8">
      <img src="https://flagcdn.com/w320/ve.png" alt="Venezuela" className="flag-img" />
    </div>
    <div className="item item9">
      <img src="https://flagcdn.com/w320/br.png" alt="Brazil" className="flag-img" />
    </div>
    <div className="item item10">
      <img src="https://flagcdn.com/w320/gt.png" alt="Guatemala" className="flag-img" />
    </div>
    <div className="item item11">
      <img src="https://flagcdn.com/w320/hn.png" alt="Honduras" className="flag-img" />
    </div>
    <div className="item item12">
      <img src="https://flagcdn.com/w320/sv.png" alt="El Salvador" className="flag-img" />
    </div>
    <div className="item item13">
      <img src="https://flagcdn.com/w320/ni.png" alt="Nicaragua" className="flag-img" />
    </div>
    <div className="item item14">
      <img src="https://flagcdn.com/w320/cr.png" alt="Costa Rica" className="flag-img" />
    </div>
    <div className="item item15">
      <img src="https://flagcdn.com/w320/pa.png" alt="Panama" className="flag-img" />
    </div>
    <div className="item item16">
      <img src="https://flagcdn.com/w320/py.png" alt="Paraguay" className="flag-img" />
    </div>
    <div className="item item17">
      <img src="https://flagcdn.com/w320/uy.png" alt="Uruguay" className="flag-img" />
    </div>
    <div className="item item18">
      <img src="https://flagcdn.com/w320/bo.png" alt="Bolivia" className="flag-img" />
    </div>
    <div className="item item19">
      <img src="https://flagcdn.com/w320/ec.png" alt="Ecuador" className="flag-img" />
    </div>
    <div className="item item20">
      <img src="https://flagcdn.com/w320/pr.png" alt="Puerto Rico" className="flag-img" />
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default page
