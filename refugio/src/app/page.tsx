import React from 'react'
import '@/styles/globals.css'
import CommunityImage from '@/images/community.png'
import Logo from '@/images/logo.png'
import Link from 'next/link';

const page = () => {
  return (
    <>
    <nav className="nav-bar">
      <ul>
        <img src={Logo.src} alt="Logo"/>
        <li>
          <Link href="/emergency-kit">Emergency-Kits</Link>
        </li>
        <li>
          <Link href="/trust-circles">Trust Circles</Link>
        </li>
        <li>
          <Link href="/reconnect">Reconnect</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>

    <main>
      <h2 className="text-3xl font-bold mb-4">Helping the Latinx community stay together</h2>
      <p>Protect your family. Find your community. Rebuild your connections.</p>
      <button>Find out more</button>
      <img src={CommunityImage.src} alt="Latinx community" />
    </main>

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



    </>
  )
}

export default page