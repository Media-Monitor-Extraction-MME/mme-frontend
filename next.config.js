const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    NEXT_PUBLIC_API_URL: 'http://localhost:3000'
  },
  headers: [],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      },
      {
        protocol: 'https',
        hostname: 's.gravatar.com'
      },
      {
        protocol: 'http',
        hostname: 'purecatamphetamine.github.io'
      }
    ]
  }
};

module.exports = nextConfig;
