import type { Metadata } from 'next';
import AboutClient from '@/components/AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Ariston Developers — founded by Abdul Rehaman, Bangalore's premier luxury property developer with 15+ years of expertise in residential real estate, construction and land development across South Bangalore.",
  keywords: [
    'About Ariston Developers',
    'Abdul Rehaman property developer Bangalore',
    'Bangalore luxury real estate company',
    'premium developer Jayanagar Bangalore',
    'property developer South Bangalore',
    'real estate company Karnataka',
    'luxury home builder Bangalore',
    'Ariston Developers history',
    'best property developer Bangalore',
    'trusted real estate Bangalore',
  ],
  openGraph: {
    title: 'About Ariston Developers | Premier Property Developer Bangalore',
    description:
      'Founded by Abdul Rehaman — 15+ years building luxury residential properties across Bangalore with transparency, integrity and design excellence.',
    url: 'https://www.aristondevelopers.com/about',
    siteName: 'Ariston Developers',
    images: [
      {
        url: '/property-4.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ariston Developers — About Us',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ariston Developers | Premier Property Developer Bangalore',
    description:
      '15+ years of luxury real estate excellence in Bangalore. 420+ properties. ₹2,400 Cr+ in investment value.',
    images: ['/property-4.jpeg'],
  },
  alternates: {
    canonical: 'https://www.aristondevelopers.com/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
