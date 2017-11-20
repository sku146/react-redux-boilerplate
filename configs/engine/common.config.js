export default {
  protocol: 'http',
  host: 'localhost',
  port: 9001,
  publicPath: './',
  brands: [],
  journeys: ['appJourney'],
  favIcon: './src/assets/icons/favicon.png',
  assetsBundleLimit: 100000,
  prodBunldeOptions: {
    minimize: true,
    comments: true,
    compress: {
      warnings: false,
    },
  },
  inject: true,
  brandProperties: {
    default: {
      title: 'Online React Webpack Sample Application',
      brandName: '',
      basePath: '/',
      brandHome: 'http://localhost:9001',
      brandPrivacy: 'http://localhost:9001/',
    },
  },
};
