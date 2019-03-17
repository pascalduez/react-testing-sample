import { css } from 'docz-plugin-css';

export default {
  title: 'React module boilerplate',
  src: './src',
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true,
      loaderOpts: {
        localIdentName: '[name]-[local]_[hash:base64:5]',
      },
    }),
  ],
};