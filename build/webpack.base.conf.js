const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: ''
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loader: {
          scss: 'vue-style-loader!css-loader!sass-loader'
        }
      }
    }, {
        test: /\.html$/, // tells webpack to use this loader for all ".html" files
        loader: 'html-loader',
        options: {
            attrs: ['img:src', 'link:href']
        }
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    // name: '.[name].[ext]'
                    name:`${PATHS.assets}img/[name].[ext]`
                }
            }
        ]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }
      ]
    }]
  },
  resolve: {
    alias: {
      '~': 'src',
      'vue$': 'vue/dist/vue.js',
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`,
    }),
    // Copy HtmlWebpackPlugin and change index.html for another html page
    new HtmlWebpackPlugin({
      // template: `${PATHS.src}/index.html`,
      template: '!!html-loader?interpolate!src/index.html',
      filename: './index.html',
      inject: true
    }),
    // new HtmlWebpackPlugin(), // Generates default index.html
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'about.html',
        template: '!!html-loader?interpolate!src/about.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'about.html',
        template: '!!html-loader?interpolate!src/about.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'analysis.html',
        template: '!!html-loader?interpolate!src/analysis.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'career.html',
        template: '!!html-loader?interpolate!src/career.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'contacts.html',
        template: '!!html-loader?interpolate!src/contacts.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'reporting.html',
        template: '!!html-loader?interpolate!src/reporting.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'login.html',
        template: '!!html-loader?interpolate!src/login.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'actual-tasks.html',
        template: '!!html-loader?interpolate!src/actual-tasks.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'terms.html',
        template: '!!html-loader?interpolate!src/terms.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'franchise.html',
        template: '!!html-loader?interpolate!src/franchise.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'statistic.html',
        template: '!!html-loader?interpolate!src/statistic.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'login2.html',
        template: '!!html-loader?interpolate!src/login2.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'registration.html',
        template: '!!html-loader?interpolate!src/registration.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'thank-you.html',
        template: '!!html-loader?interpolate!src/thank-you.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'forgot-password.html',
        template: '!!html-loader?interpolate!src/forgot-password.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'change-password.html',
        template: '!!html-loader?interpolate!src/change-password.html'
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: '' },
    ])
  ],
};
