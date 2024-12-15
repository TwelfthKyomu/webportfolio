import { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['example.com'],
	},
	i18n: {
		locales: ['en', 'ru'],
		defaultLocale: 'ru',
	},
	webpack: (config, {isServer}) => {
		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
				path: false,
				os: false,
			};
		}

		return config;
	},
};

export default nextConfig;