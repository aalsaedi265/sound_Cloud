const path = require("path");
const webpack = require("webpack");

/**
 * Webpack configuration
 * @param {object} env - The environment object
 * @param {object} argv - The command line arguments object
 * @returns {object} - The webpack configuration
 */
module.exports = (env, argv) => {
  // Determine if the mode is production
  const isProduction = argv.mode === 'production';

  return {
    // The entry point of the application
    entry: './src/index.js',
    // The output configuration for webpack
    output: {
      // The output path for the compiled files
      path: path.resolve(__dirname, './static/frontend'),
      // The filename for the output file
      filename: 'main.js',
    },
    // The module configuration for webpack
    module: {
      // The rules for webpack to use
      rules: [
        // The rule for babel-loader to transpile JavaScript and JSX files
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // The presets to use
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        }
      ],
    },
    // The resolve configuration for webpack
    resolve: {
      // The extensions to use
      extensions: ['.js', '.jsx'],
    },
    // The optimization configuration for webpack
    optimization: {
      // Minimize the output if the mode is production
      minimize: isProduction,
    },
    // The plugins to use
    plugins: [
      // The DefinePlugin to define the environment variable
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      }),
    ],
    // The mode to use
    mode: isProduction ? 'production' : 'development',
    watch: !isProduction,
  };
};