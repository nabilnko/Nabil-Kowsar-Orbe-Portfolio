/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true"
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const basePath = isGitHubActions && repoName ? `/${repoName}` : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
