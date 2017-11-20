import sysPath from 'path';

export default {
  performance: {
    hints: false,
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['*', '.js', '.jsx', '.json'],
    alias: {
      actions: sysPath.resolve(`${process.cwd()}`, 'src/actions'),
      assets: sysPath.resolve(`${process.cwd()}`, 'src/assets'),
      constants: sysPath.resolve(`${process.cwd()}`, 'src/constants'),
      components: sysPath.resolve(`${process.cwd()}`, 'src/components'),
      containers: sysPath.resolve(`${process.cwd()}`, 'src/containers'),
      copies: sysPath.resolve(`${process.cwd()}`, 'src/copies'),
      journeys: sysPath.resolve(`${process.cwd()}`, 'src/journeys'),
      reducers: sysPath.resolve(`${process.cwd()}`, 'src/reducers'),
      store: sysPath.resolve(`${process.cwd()}`, 'src/store'),
      styles: sysPath.resolve(`${process.cwd()}`, 'src/styles'),
      services: sysPath.resolve(`${process.cwd()}`, 'src/services'),
      utils: sysPath.resolve(`${process.cwd()}`, 'src/utils'),
      middleware: sysPath.resolve(`${process.cwd()}`, 'src/middleware'),
    },
  },
  module: {
    rules: [],
  },
  plugins: [],
};
