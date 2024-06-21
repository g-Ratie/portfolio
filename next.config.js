/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix:
    process.env.GITHUB_REPOSITORY !== undefined
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
      : '',
  basePath:
    process.env.GITHUB_REPOSITORY !== undefined
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
      : '',
  output: 'export',
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
