import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["utfs.io","via.placeholder.com"],
    },
};

 
export default withNextIntl(nextConfig);