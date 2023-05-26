/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'upload.wikimedia.org',
            },
        ],
    },
}

module.exports = nextConfig
