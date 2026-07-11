const nextConfig = {
  reactStrictMode: true,
  // Static HTML export so the site can be hosted on GoDaddy shared hosting.
  output: 'export',
  // GoDaddy/Apache serves folders as /route/index.html — trailing slash keeps links working.
  trailingSlash: true,
  // next/image optimization needs a server; disable it for static export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
