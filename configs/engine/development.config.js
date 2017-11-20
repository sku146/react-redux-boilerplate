import journeys from './journeys';

export default {
  contentBase: 'src',
  output: {
    root: 'dist',
  },
  rootTemplate: {
    path: 'src/index.html',
    fileName: 'index.html',
  },
  ...journeys.development,
};
