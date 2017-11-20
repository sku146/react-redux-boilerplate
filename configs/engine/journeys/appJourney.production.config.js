
export default {
  appJourney: {
    entry: {
      app: [
        './src/journeys/appJourney/app.mount.jsx',
      ],
      styles: './src/styles/main.less',
    },
    output: {
      foldersFilesMap: {
        scripts: {
          app: 'app.mount.min',
        },
        css: {
          styles: 'main.bundle.min',
        },
      },
    },
    htmlOutput: {
      fileName: 'index.html',
      template: 'src/journeys/appJourney/appJourney.ejs',
    },
  },
};
