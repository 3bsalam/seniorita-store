const nextConfig = {
  // env: {
  //   API_URL: "https://multikart-graphql-reactpixelstrap.vercel.app/server.js",
  // },

  // if you want to run with local graphQl un-comment below one and comment the above code
  env: {
    API_URL: "http://localhost:4000/graphql",
  },

  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
};
module.export = nextConfig;
