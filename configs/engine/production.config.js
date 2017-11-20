import journeys from './journeys';

export default {
  output: {
    root: 'dist-release',
  },
  ...journeys.production,
};
