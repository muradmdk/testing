/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['202.166.170.246'], // Add your domain here
  },
    webpack: (config) => {
        config.module.rules.push({
          test: /\.(mp3|wav)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/sounds',
                outputPath: 'static/sounds',
                name: '[name].[hash].[ext]',
              },
            },
          ],
        });
        config.module.rules.push({
          test: /\.(mp4|webm|ogg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/media',
                outputPath: 'static/media',
                name: '[name].[hash].[ext]',
              },
            },
          ],
        });
        return config;
      },
};

export default nextConfig;
