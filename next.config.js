/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [
            'res.cloudinary.com',
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            'https://cdn.pixabay.com',
            'plus.unsplash.com',
            'images.unsplash.com',
            'cdn.pixabay.com'
        ]
    },
}

module.exports = nextConfig
