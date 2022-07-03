module.exports = {
  mode: 'production',
  entry: './app/entry',
  output: {
    // ...
  },
  module: {
    // ...
  },
  resolve: {
    // ...
    fallback: {
      'fs': false,
      'tls': false,
      'net': false,
      'path': false,
      'zlib': false,
      'http': false,
      'https': false,
      'stream': false,
      'crypto': false,
      'crypto-browserify': require.resolve('crypto-browserify'),
      'os': require.resolve('os-browserify/browser'),
      'child_process': false,
    },
  },
  performance: {
    // ...
  },
  experiments: {
    asyncWebAssembly: true,
    layers: true,
  },
  plugins: [],
  optimization: {
    // ...
  },
}
