export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'RealEstateAgent'],
        '@id': 'https://www.aristondevelopers.com/#business',
        name: 'Ariston Developers',
        description:
          'Premium property developer in Bangalore specialising in luxury residential buying & selling, construction, land development and joint ventures across South and East Bangalore.',
        url: 'https://www.aristondevelopers.com',
        telephone: ['+91-99457-26707', '+91-80-41711912'],
        email: 'ariston1632@gmail.com',
        foundingDate: '2010',
        slogan: 'We Build Your Dream Home',
        priceRange: '₹₹₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Bank Transfer, Cheque',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '#1716/135, East End A Main Road',
          addressLocality: 'Jayanagar 9th Block',
          addressRegion: 'Karnataka',
          postalCode: '560069',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 12.9243,
          longitude: 77.5836,
        },
        hasMap: 'https://maps.google.com/?q=12.9243,77.5836',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
        founder: {
          '@type': 'Person',
          name: 'Abdul Rehaman',
          jobTitle: 'Founder & Managing Director',
        },
        areaServed: [
          { '@type': 'City', name: 'Bangalore', sameAs: 'https://en.wikipedia.org/wiki/Bangalore' },
          { '@type': 'Neighborhood', name: 'Jayanagar', containedInPlace: 'Bangalore' },
          { '@type': 'Neighborhood', name: 'Koramangala', containedInPlace: 'Bangalore' },
          { '@type': 'Neighborhood', name: 'JP Nagar', containedInPlace: 'Bangalore' },
          { '@type': 'Neighborhood', name: 'Indiranagar', containedInPlace: 'Bangalore' },
          { '@type': 'Neighborhood', name: 'HSR Layout', containedInPlace: 'Bangalore' },
          { '@type': 'Neighborhood', name: 'Whitefield', containedInPlace: 'Bangalore' },
          { '@type': 'Neighborhood', name: 'Bannerghatta Road', containedInPlace: 'Bangalore' },
          { '@type': 'Neighborhood', name: 'BTM Layout', containedInPlace: 'Bangalore' },
          { '@type': 'Neighborhood', name: 'Banashankari', containedInPlace: 'Bangalore' },
          { '@type': 'Neighborhood', name: 'Electronic City', containedInPlace: 'Bangalore' },
          { '@type': 'Neighborhood', name: 'Sarjapur Road', containedInPlace: 'Bangalore' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Real Estate Services — Ariston Developers',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Luxury Property Buying & Selling in Bangalore',
                description: 'End-to-end guidance for premium residential property transactions in Bangalore with full legal due diligence.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Residential & Commercial Construction',
                description: 'Custom home construction and bespoke development with premium finishes across Bangalore.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Land Development Bangalore',
                description: 'Strategic land acquisition, layout approvals and development across high-growth Bangalore corridors.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Real Estate Joint Ventures',
                description: 'Partnership-driven property development for landowners seeking transparent, profit-maximising outcomes.',
              },
            },
          ],
        },
        sameAs: [
          'https://wa.me/919945726707',
          'https://www.instagram.com/ariston_developers',
          'https://www.linkedin.com/company/ariston-developers',
        ],
        image: {
          '@type': 'ImageObject',
          url: 'https://www.aristondevelopers.com/logo.jpeg',
          width: 200,
          height: 200,
        },
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.aristondevelopers.com/logo.jpeg',
          width: 200,
          height: 200,
        },
        knowsAbout: [
          'Luxury Real Estate Bangalore',
          'Property Development Bangalore',
          'Land Development Karnataka',
          'Joint Ventures Real Estate',
          'Residential Construction Bangalore',
          'Premium Property Investment Bangalore',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '310',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.aristondevelopers.com/#website',
        url: 'https://www.aristondevelopers.com',
        name: 'Ariston Developers',
        description: 'Premium property developer in Bangalore for luxury real estate, construction and land development.',
        publisher: { '@id': 'https://www.aristondevelopers.com/#business' },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.aristondevelopers.com/#properties?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What areas does Ariston Developers serve in Bangalore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ariston Developers serves South and East Bangalore including Jayanagar, Koramangala, JP Nagar, Indiranagar, HSR Layout, Whitefield, Bannerghatta Road, BTM Layout, Banashankari, Electronic City and Sarjapur Road.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I contact Ariston Developers for a property consultation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact Ariston Developers by calling +91 99457 26707, emailing ariston1632@gmail.com, or visiting #1716/135, East End A Main Road, Jayanagar 9th Block, Bangalore 560069. Open Monday–Saturday, 9:00 am – 7:00 pm.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Ariston Developers offer joint venture opportunities?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Ariston Developers actively partners with landowners and investors for premium residential development projects across Bangalore under transparent joint venture agreements.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the price of properties by Ariston Developers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ariston Developers specialises in premium and luxury properties. All prices are available on request and are tailored to each property. Contact +91 99457 26707 for personalised pricing.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many years of experience does Ariston Developers have?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ariston Developers has over 15 years of experience in the Bangalore real estate market since 2010, with 420+ properties sold and ₹2,400 Cr+ in investment value placed for clients.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Ariston Developers handle construction projects?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Ariston Developers offers turnkey residential construction services with premium finishes, engineered for longevity and design excellence across all Bangalore neighbourhoods.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
