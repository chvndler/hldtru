const { withPlaiceholder } = require("@plaiceholder/next")

module.exports = withPlaiceholder({
  images: {
	domains: ['cdn.hldtru.space', 's3.amazonaws.com', 'hldtru.cloud', 'www.hldtru.cloud'],
  }
})

module.exports = {
  reactStrictMode: true,
	images: {
	domains: ['cdn.hldtru.space', 's3.amazonaws.com', 'hldtru.cloud', 'www.hldtru.cloud'],
	}
}
