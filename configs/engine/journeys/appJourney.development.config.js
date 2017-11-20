import common from '../common.config';

export default {
  appJourney: {
    entry: {
      app: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?${common.protocol}://${common.host}:${common.port}/`,
        'webpack/hot/only-dev-server',
        './src/journeys/appJourney/app.mount.jsx',
      ],
      styles: './src/styles/main.less',
    },
    output: {
      foldersFilesMap: {
        scripts: {
          app: 'app.mount',
        },
        css: {
          styles: 'main.bundle',
        },
      },
    },
    htmlOutput: {
      fileName: 'index.html',
      template: 'src/journeys/appJourney/appJourney.ejs',
    },
  },
};
