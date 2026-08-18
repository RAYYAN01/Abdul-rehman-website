import type { Metadata } from 'next';
import UpcomingProjectClient from '@/components/UpcomingProjectClient';

export const metadata: Metadata = {
  title: 'Upcoming Project',
  description:
    'Explore interior renders of the upcoming Ariston Developers residence in Bengaluru — master bedroom and three bedrooms, room by room.',
  openGraph: {
    title: 'Upcoming Project | Ariston Developers',
    description:
      'A room-by-room walkthrough of the interior design for our next residence in Bengaluru.',
    url: 'https://www.aristondevelopers.com/upcoming-project',
    siteName: 'Ariston Developers',
    images: [
      {
        url: '/renders/master-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ariston Developers — Upcoming Project Interior Render',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.aristondevelopers.com/upcoming-project',
  },
};

export default function UpcomingProjectPage() {
  return <UpcomingProjectClient />;
}
