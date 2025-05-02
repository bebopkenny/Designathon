import React from 'react';
import { Gavel, Users, HeartHandshake, BookOpen } from 'lucide-react';
import ChartSection from '@/components/ChartSection'
import Link from 'next/link';

const resources = [
  {
    title: 'Volunteer at Immigration Legal Clinic (LACBA)',
    description:
      'Help low-income immigrants with green cards, work permits, and more. No experience needed — training provided.',
    href: 'https://lacba.org/?pg=cfj-immigration-clinic',
    icon: <Gavel className="w-5 h-5 text-indigo-500" />,
  },
  {
    title: 'Legal Observer Training (ACLU Hawaii)',
    description:
      'Become a trained witness at protests. Observe, document, and report on police interactions while protecting civil rights.',
    href: 'https://www.acluhi.org/sites/default/files/legal_observer_training_03.24.2024.pdf',
    icon: <Users className="w-5 h-5 text-red-500" />,
  },
  {
    title: 'Volunteer with IRC Los Angeles',
    description:
      'Teach ESL, prep refugees for jobs, or help set up homes for new arrivals. Internships and youth volunteering available.',
    href: 'https://www.rescue.org/volunteer-opportunities/los-angeles-ca',
    icon: <HeartHandshake className="w-5 h-5 text-emerald-500" />,
  },
  {
    title: 'Freedom for Immigrants – Take Action',
    description:
      'End immigration detention and abuse. Track ICE detention centers and join national campaigns for immigrant justice.',
    href: 'https://www.freedomforimmigrants.org/',
    icon: <Gavel className="w-5 h-5 text-yellow-500" />,
  },
  {
    title: 'Support CHIRLA’s iRelief Fund',
    description:
      'Donate to immigrant families impacted by disaster who don’t qualify for FEMA aid. Funds cover food, rent, transport.',
    href: 'https://www.chirla.org/donatenow/',
    icon: <HeartHandshake className="w-5 h-5 text-pink-500" />,
  },
  {
    title: 'RAICES Texas: Legal Aid & Advocacy',
    description:
      'Join the fight for family unity. Donate or volunteer with one of the nation’s most active immigrant defense orgs.',
    href: 'https://www.raicestexas.org/',
    icon: <Gavel className="w-5 h-5 text-blue-500" />,
  },
  {
    title: 'Immigrant Families Together (IFT)',
    description:
      'IFT posted bonds for 128 parents and reunites families separated at the border. They also support food, housing, ESL.',
    href: 'https://immigrantfamiliestogether.com/',
    icon: <Users className="w-5 h-5 text-orange-500" />,
  },
];

const WaysToHelp = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <h1 className="text-3xl font-bold text-center">Ways to Help & Stand in Solidarity</h1>

              {/* --- Educational Materials Section --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <BookOpen size={24} /> Educational Materials
        </h2>

        <details className="bg-gray-50 dark:bg-[#1E1E2F] p-4 rounded-lg shadow" open>
          <summary className="cursor-pointer font-medium text-lg text-gray-800 dark:text-white">Why don’t immigrants just get in line?</summary>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Many undocumented immigrants have no path to citizenship due to the limited and complex nature of the U.S. immigration system. Even if someone meets eligibility criteria, they often face multi-decade wait times or risk separation from family.
          </p>
          <a
            href="https://www.americanimmigrationcouncil.org/research/why-don%E2%80%99t-they-just-get-line"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-blue-600 dark:text-blue-400 mt-2"
          >
            Read Full Article →
          </a>
        </details>

        <details className="bg-gray-50 dark:bg-[#1E1E2F] p-4 rounded-lg shadow">
          <summary className="cursor-pointer font-medium text-lg text-gray-800 dark:text-white">Immigration and California Families</summary>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            This CA.gov guide helps families understand their rights, school protections, mental health resources, and access to legal help, regardless of immigration status.
          </p>
          <a
            href="https://www.ca.gov/immigration/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-blue-600 dark:text-blue-400 mt-2"
          >
            Visit CA.gov Immigration Page →
          </a>
        </details>

        <details className="bg-gray-50 dark:bg-[#1E1E2F] p-4 rounded-lg shadow">
          <summary className="cursor-pointer font-medium text-lg text-gray-800 dark:text-white">The Economic Contributions of Undocumented Californians</summary>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            A 2024 study reveals undocumented immigrants contribute over $8.5 billion in California taxes annually. They fund systems they’re often excluded from.
          </p>
          <a
            href="https://calbudgetcenter.org/news/new-study-undocumented-immigrants-contribute-8-5-billion-in-california-taxes-a-year/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-blue-600 dark:text-blue-400 mt-2"
          >
            View the Full Report →
          </a>
        </details>
      </section>
        
        <ChartSection />
      
      <p className="text-center text-sm text-muted-foreground mb-8">
        Take action through volunteering, donating, and supporting immigrant justice organizations.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {resources.map((res, idx) => (
          <div
            key={idx}
            className="border rounded-lg bg-white shadow-md hover:shadow-lg transition p-4 space-y-3"
          >
            <div className="flex items-center gap-3">
              {res.icon}
              <h2 className="font-semibold text-md text-gray-800">{res.title}</h2>
            </div>
            <p className="text-sm text-gray-600 leading-snug">{res.description}</p>
            <Link
              href={res.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              Learn more ↗
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaysToHelp;
