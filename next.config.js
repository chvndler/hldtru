const { withPlaiceholder } = require("@plaiceholder/next")

module.exports = withPlaiceholder({
  images: {
	domains: ['cdn.hldtru.space', 's3.amazonaws.com', 'd4fh3qho2i2wx.cloudfront.net', 'hldtru.cloud'],
  }
})

module.exports = {
  reactStrictMode: true,
	images: {
	domains: ['cdn.hldtru.space', 's3.amazonaws.com'],
	}
}
