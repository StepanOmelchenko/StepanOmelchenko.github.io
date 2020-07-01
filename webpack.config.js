const path = require('path');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            root: path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: '/css'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            discardComments: {
                                removeAll: true
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        publicPath: 'dist',
        compress: true,
        port: 9000
    }
};
