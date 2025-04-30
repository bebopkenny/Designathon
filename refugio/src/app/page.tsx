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
      <h2 className="text-3xl font-bold mb-4">Helping the Latinx community stay together</h2>
      <p>Protect your family. Find your community. Rebuild your connections.</p>
      <button>Find out more</button>
    </main>

    <div className="scroll-container">
      <div className="wrapper">
        <div className="item item1">
          <span className="fi fi-mx flag"></span> {/* Mexico 🇲🇽 */}
        </div>
        <div className="item item2">
          <span className="fi fi-ar flag"></span> {/* Argentina 🇦🇷 */}
        </div>
        <div className="item item3">
          <span className="fi fi-cl flag"></span> {/* Chile 🇨🇱 */}
        </div>
        <div className="item item4">
          <span className="fi fi-co flag"></span> {/* Colombia 🇨🇴 */}
        </div>
        <div className="item item5">
          <span className="fi fi-cu flag"></span> {/* Cuba 🇨🇺 */}
        </div>
        <div className="item item6">
          <span className="fi fi-do flag"></span> {/* Dominican Republic 🇩🇴 */}
        </div>
        <div className="item item7">
          <span className="fi fi-pe flag"></span> {/* Peru 🇵🇪 */}
        </div>
        <div className="item item8">
          <span className="fi fi-ve flag"></span> {/* Venezuela 🇻🇪 */}
        </div>
      </div>
    </div>

    </>
  )
}

export default page