/** @type {import('next').NextConfig} */

const repo = "Portfolio";
const assetPrefix = `/${repo}/`;
const basePath =`/${repo}`


const nextConfig = {
    trailingSlash: true,

    output: 'export',
    basePath: basePath,
    assetPrefix: assetPrefix,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
