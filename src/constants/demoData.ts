export const DEMO_ASSETS = {
  image1: '685d8525-2e65-4f6c-8e65-2e652e652e65',
  image2: '685d8525-2e65-4f6c-8e65-2e652e652e66',
  image3: '685d8525-2e65-4f6c-8e65-2e652e652e67',
  icon: '685d8525-2e65-4f6c-8e65-2e652e652e68',
};

export const DEMO_SECTIONS: Record<string, any[]> = {
  hero: [
    {
      type: 'hero-with-top-big-image',
      title: 'Experience the Future of Urban Living',
      subtitle:
        'Premium residential and commercial spaces designed for modern life.',
      cover: { id: DEMO_ASSETS.image1 },
      buttons: [{ title: 'Explore Projects', url: '#' }],
    },
    {
      type: 'hero-text-overlay',
      title: 'Find Your Dream Home',
      subtitle: 'Search across 1000+ premium properties in the city center.',
      cover: { id: DEMO_ASSETS.image2 },
      contents: 'Search properties...',
      buttons: [{ title: 'Search' }],
    },
    {
      type: 'hero-with-bottom-big-image',
      title: 'Sustainability Meets Luxury',
      subtitle: 'Our latest development index',
      blurb:
        'We create spaces that are not just beautiful, but also kind to the environment.',
      cover: { id: DEMO_ASSETS.image3 },
    },
  ],
  cta: [
    {
      type: 'cta-basic',
      title: 'Ready to move in?',
      blurb:
        'Contact our sales team today for a private viewing of our latest units.',
      buttons: [{ title: 'Contact Us', url: '/contact' }],
    },
    {
      type: 'cta-with-field',
      title: 'Get in Touch',
      blurb:
        'Have questions about our properties or investment opportunities? Send us a message.',
      contents:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.636881180121!2d105.82470631533202!3d21.00718899388835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8066c04f47%3A0x6734c5625ff68f77!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaOG7p3kgbOG7o2k!5e0!3m2!1svi!2s!4v1625642876541!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      buttons: [{ title: 'Send Message' }],
    },
  ],
  team: [
    {
      type: 'team-grid',
      title: 'Our Executive Team',
      subtitle: 'The visionaries behind Ramond Urbaniz',
      items: [
        {
          title: 'John Smith',
          position: 'CEO & Founder',
          blurb: '20+ years in real estate development.',
          cover: { id: DEMO_ASSETS.image1 },
        },
        {
          title: 'Sarah Jenkins',
          position: 'Chief Architect',
          blurb: 'Award-winning urban designer.',
          cover: { id: DEMO_ASSETS.image2 },
        },
        {
          title: 'Michael Chen',
          position: 'Operations Director',
          blurb: 'Expert in large scale project management.',
          cover: { id: DEMO_ASSETS.image3 },
        },
        {
          title: 'Emma Watson',
          position: 'Marketing Head',
          blurb: 'Leading our global brand strategy.',
          cover: { id: DEMO_ASSETS.image1 },
        },
      ],
    },
    {
      type: 'team-2-col',
      title: 'Board of Directors',
      subtitle: 'Governance and Strategy',
      items: [
        {
          title: 'David Wilson',
          position: 'Chairman',
          cover: { id: DEMO_ASSETS.image2 },
        },
        {
          title: 'Linda Brown',
          position: 'Vice Chairman',
          cover: { id: DEMO_ASSETS.image3 },
        },
      ],
    },
  ],
  number: [
    {
      type: 'number-split',
      title: 'Our Impact in Numbers',
      cover: { id: DEMO_ASSETS.image1 },
      items: [
        { title: '500+', blurb: 'Units Delivered' },
        { title: '12', blurb: 'Ongoing Projects' },
        { title: '150k', blurb: 'Sqft Developed' },
        { title: '98%', blurb: 'Client Satisfaction' },
      ],
    },
    {
      type: 'number-with-text',
      title: 'Growth & Excellence',
      items: [
        { title: '2010', blurb: 'Year Established' },
        { title: '25+', blurb: 'Industry Awards' },
        { title: '5', blurb: 'Cities Present' },
      ],
    },
  ],
  information: [
    {
      type: 'info-with-left-image',
      title: 'Quality Construction',
      subtitle: 'Built to Last',
      contents:
        '<p>We use only the finest materials and latest engineering techniques to ensure our buildings stand the test of time.</p><ul><li>Premium Concrete</li><li>Advanced Structural Design</li><li>Seismic Resistance</li></ul>',
      cover: { id: DEMO_ASSETS.image2 },
    },
    {
      type: 'info-with-right-image',
      title: 'Prime Locations',
      subtitle: 'Location is Everything',
      contents:
        '<p>Our projects are strategically located in the heart of developing urban clusters, ensuring high appreciation and convenience.</p>',
      cover: { id: DEMO_ASSETS.image3 },
    },
  ],
  card: [
    {
      type: 'card-slider-with-left-right-button',
      title: 'Recent Awards',
      subtitle: 'Excellence Recognized',
      items: [
        {
          title: 'Best Residential Project 2024',
          blurb: 'Excellence in Design',
          cover: { id: DEMO_ASSETS.image1 },
        },
        {
          title: 'Sustainable Developer of the Year',
          blurb: 'Eco-innovation',
          cover: { id: DEMO_ASSETS.image2 },
        },
        {
          title: 'Urban Design Award',
          blurb: 'City Integration',
          cover: { id: DEMO_ASSETS.image3 },
        },
        {
          title: 'Innovation in Tech',
          blurb: 'Smart Homes',
          cover: { id: DEMO_ASSETS.image1 },
        },
      ],
    },
    {
      type: 'card-2-col-with-blurb',
      title: 'Our Services',
      items: [
        {
          title: 'Property Management',
          blurb: 'End-to-end management services for your investments.',
        },
        {
          title: 'Consultancy',
          blurb: 'Expert advice on urban planning and development.',
        },
      ],
    },
  ],
  gallery: [
    {
      type: 'gallery-alternate',
      title: 'The Urbania Project',
      blurb: 'A glimpse into our flagship development in the city center.',
      items: [
        { id: DEMO_ASSETS.image1 },
        { id: DEMO_ASSETS.image2 },
        { id: DEMO_ASSETS.image3 },
      ],
    },
  ],
  'post-grid': [
    {
      type: 'posts-2-col',
      title: 'Latest News',
      items: [
        {
          title: 'Grand Opening of Park View',
          blurb: 'We are excited to announce the completion of Park View.',
          cover: { id: DEMO_ASSETS.image1 },
        },
        {
          title: 'Sustainable Living Trends',
          blurb: 'How urban living is evolving in 2025.',
          cover: { id: DEMO_ASSETS.image2 },
        },
      ],
    },
  ],
  review: [
    {
      type: 'review-split-with-text',
      title: 'What Our Clients Say',
      subtitle: 'Testimonials',
      cover: { id: DEMO_ASSETS.image1 },
    },
  ],
  slider: [
    {
      type: 'logo-slider',
      items: [
        { cover: { id: DEMO_ASSETS.image1 } },
        { cover: { id: DEMO_ASSETS.image2 } },
        { cover: { id: DEMO_ASSETS.image3 } },
      ],
    },
  ],
  feature: [
    {
      type: 'feature-4-col',
      items: [
        {
          title: 'Prime Location',
          blurb: 'Walking distance to city landmarks.',
          icon: { id: DEMO_ASSETS.icon },
        },
        {
          title: 'Smart Security',
          blurb: '24/7 AI-monitored protection.',
          icon: { id: DEMO_ASSETS.icon },
        },
        {
          title: 'Infinity Pool',
          blurb: 'Breathtaking views of the city.',
          icon: { id: DEMO_ASSETS.icon },
        },
        {
          title: 'Gym & Spa',
          blurb: 'World-class wellness facilities.',
          icon: { id: DEMO_ASSETS.icon },
        },
      ],
    },
  ],
  breadcrumb: [
    {
      type: 'breadcrumb-basic',
      title: 'Projects',
      items: [
        { title: 'Home', url: '/' },
        { title: 'Portfolio', url: '/portfolio' },
        { title: 'Current Projects', url: '#' },
      ],
    },
  ],
};
