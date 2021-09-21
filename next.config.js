const { withPlaiceholder } = require("@plaiceholder/next")

module.exports = withPlaiceholder({
  images: {
	domains: ['cdn.hldtru.space', 's3.amazonaws.com', 'hldtru.io', 'assets.hldtru.io'],
  }
})

module.exports = {
  reactStrictMode: true,
	images: {
	domains: ['cdn.hldtru.space', 's3.amazonaws.com', 'hldtru.io', 'assets.hldtru.io'],
	}
}
