'use client'

import React, { useState } from 'react';
import '@/styles/globals.css';
import Sidebar, { SidebarItem } from '@/components/Sidebar'
import { LayoutDashboard, Info, PhoneCall, Gavel } from "lucide-react"; 

const rights = [
  {
    title: 'Remain Silent',
    desc: 'You have the right to remain silent and not answer questions about your immigration status or where you were born.'
  },
  {
    title: 'Speak to a Lawyer',
    desc: 'You can ask to speak to a lawyer and not sign anything you don’t understand.'
  },
  {
    title: 'Don’t Open the Door',
    desc: 'If ICE comes to your home, you do not have to open the door unless they have a signed warrant.'
  },
  {
    title: 'Prepare a Safety Plan',
    desc: 'Create a family preparedness plan and memorize important numbers in case of an emergency.'
  },
  {
    title: 'Carry a Know-Your-Rights Card',
    desc: 'You can carry a rights card to show authorities if approached.'
  }
];

export default function RightsSlider() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
<>
{/* <Sidebar>
        <SidebarItem icon={<LayoutDashboard />} text="Checklist" href="/emergency-kit/checklist" />
        <SidebarItem icon={<Info />} text="Flashcards" href="/emergency-kit/flashcards" />
        <SidebarItem icon={<PhoneCall />} text="Emergency Contacts" href="/emergency-kit/contacts" />
        <SidebarItem icon={<Gavel />} text="Legal Help" href="/emergency-kit/legal" />
        </Sidebar> */}
<section className="know-your-rights-container">
  <div className="rights-slider">
    {[{
      title: 'Remain Silent',
      bullets: [
        'You have the right to remain silent.',
        'You do not need to answer questions about your immigration status.'
      ]
    }, {
      title: 'Speak to a Lawyer',
      bullets: [
        'You can ask to speak to a lawyer.',
        'Do not sign anything you do not understand.'
      ]
    }, {
      title: 'Don’t Open the Door',
      bullets: [
        'You do not have to open the door unless ICE has a signed warrant.'
      ]
    }, {
      title: 'Prepare a Safety Plan',
      bullets: [
        'Memorize important phone numbers.',
        'Prepare documents and emergency plans.'
      ]
    }, {
      title: 'Carry a Rights Card',
      bullets: [
        'Show the rights card to authorities if approached.',
        'Avoid confrontation and remain calm.'
      ]
    }].map((item, index) => (
      <div
        key={index}
        className={`rights-card ${index === 2 ? 'active' : ''}`}
        onClick={(e) => {
          document.querySelectorAll('.rights-card').forEach(c => c.classList.remove('active'));
          e.currentTarget.classList.add('active');
        }}
      >
        <h1>{item.title}</h1>
        <div className="details">
          <h2>{item.title}</h2>
          <ul>
            {item.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>
</>
  );
}
