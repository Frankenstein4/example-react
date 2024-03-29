/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/devApi': {
      //target: 'https://preview.pro.ant.design',
      target:'https://frankenstein4.github.io/00000000001/menu.json',
      changeOrigin: true,
      pathRewrite: {
        '^/devApi': '',
      },
    },
    '/api': {
        target:'http://172.31.0.3:21081/',
        changeOrigin: true,
        pathRewrite: {
          '^': '',
        },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
