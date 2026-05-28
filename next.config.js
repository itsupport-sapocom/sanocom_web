/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "media.licdn.com",   // 👈 add this
    ],
  },
  async redirects() {
    return [
      {
        source: '/industries/oil-and-gas',
        destination: '/industries/sap-oil-gas-solutions',
        permanent: true,
      },
      {
        source: '/industries/metal-and-mining',
        destination: '/industries/sap-commodity-management-metals-mining',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/sap-services',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig