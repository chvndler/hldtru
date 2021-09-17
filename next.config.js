const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
	assetPrefix: isProd ? 'https://cdn.hldtru.space' : '',
	images: {
   domains: ['cdn.hldtru.space'],
  }
}
