const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { withPlaiceholder } = require("@plaiceholder/next")

module.exports = withPlaiceholder({
  images: {
	domains: ['cdn.hldtru.space', 'hldtru.io', 'hldtru.space', 'cdn.hldtru.io'],
  }
})

module.exports = {
  reactStrictMode: true,
	images: {
	domains: ['cdn.hldtru.space', 'hldtru.io', 'hldtru.space', 'cdn.hldtru.io'],
	}
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(le|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }
      ]
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[contenthash].css'
      })
    );

    return config;
  }
};
