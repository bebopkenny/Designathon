import React from 'react'
import '@/styles/globals.css'

const page = () => {
  return (
    <>
    <nav className="nav-bar">
      <ul>
        <img /> Refugio
        <li>
          Emergency Kit
        </li>
        <li>
          Trust Circles
        </li>
        <li>
          Reconnect
        </li>
        <li>
          About
        </li>
      </ul>
    </nav>

    <main>
      <h2>Helping the Latinx community stay together</h2>
      <p>Protect your family. Find your community. Rebuild your connections.</p>
      <button>Find out more</button>
    </main>

    <div className="wrapper">
      <div className="item item1"></div>
      <div className="item item2"></div>
      <div className="item item3"></div>
      <div className="item item4"></div>
      <div className="item item5"></div>
      <div className="item item6"></div>
      <div className="item item7"></div>
      <div className="item item8"></div>
    </div>


    </>
  )
}

export default page