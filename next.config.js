/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.traction.one', 'pokeapi.co'], // Adicione 'pokeapi.co' aqui
  },
};

module.exports = nextConfig;
