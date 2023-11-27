/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*', "cdn.britannica.com", "images.pexels.com", "www.slui.org", "z-p3-scontent.fnsi1-2.fna.fbcdn.net"],
  },
};


module.exports = nextConfig;
