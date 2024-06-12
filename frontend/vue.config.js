const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir : "../backend/public",
  devServer:{
              proxy: {
                        "^/api":{   
                                target: 'http://localhost:3000',
                                changeOrigin:true,
                                ws:false,
                                // pathRewrite:{ '^/api':'' }
                              }
                      }
            }
})
