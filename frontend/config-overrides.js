const path = require('path');

const {
    override,
    babelInclude,
    addWebpackModuleRule
} = require('customize-cra');

module.exports = override(
    babelInclude([
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules/react-leaflet'),
        path.resolve(__dirname, 'node_modules/@react-leaflet'),
    ]),
    addWebpackModuleRule({ test: /.(png|jpg)$/, use: 'file-loader?name=images/[name].[ext]' }),
)