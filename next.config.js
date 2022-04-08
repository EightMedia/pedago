/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'utils', 'components', 'factories', 'lib', 'data', 'contexts']
  },
}

module.exports = nextConfig
