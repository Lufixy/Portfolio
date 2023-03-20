/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["kalashi.me", "/", "cdn.discordapp.com","i.imgur.com","raw.githubusercontent.com","sperovita.gallerycdn.vsassets.io","softwareer.net","www.coreldraw.com","ph-files.imgix.net","cdns.iconmonstr.com","avatars.githubusercontent.com",]
  },
  
 async redirects() {
    return [
      {
        source: 'https://freepanel.xyz/logins',
        destination: '/login',
        permanent: true,
      },
    ]
  },

} 


module.exports = nextConfig
