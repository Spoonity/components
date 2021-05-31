import HtmlWebpackPlugin from 'html-webpack-plugin';
export const entry = './src/main.ts';
export const resolve = {
    extensions: ['.ts', '.js']
};
export const module = {
    rules: [
        {
            test: /\.ts$/,
            use: ['ts-loader', 'angular2-template-loader']
        },
        {
            test: /\.(html|css)$/,
            use: 'raw-loader'
        },
        {
            test: /\.less$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'less-loader' }
            ]
        }
    ]
};
export const plugins = [
    new HtmlWebpackPlugin({ template: './src/index.html' })
];
export const devServer = {
    historyApiFallback: true
};