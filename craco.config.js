/*
 * @Author: your name
 * @Date: 2021-02-23 14:42:04
 * @LastEditTime: 2021-02-23 18:21:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /components_library/craco.config.js
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
  babel: {
    plugins: [
      ['import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        },
      ],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
