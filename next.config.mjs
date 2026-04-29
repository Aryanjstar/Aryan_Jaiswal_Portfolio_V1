/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		domains: ["localhost"],
		unoptimized: true,
	},
	env: {
		CUSTOM_KEY: "azure-deployment",
	},
};

export default nextConfig;
