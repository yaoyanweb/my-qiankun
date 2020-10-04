module.exports = {
    devServer: {
        port:'10000',
        headers: {
            'Access-Control-Allow-origin':'*'
        }
    },
    configureWebpack: {
        output:{
            library:'vueApp',
            libraryTarget:'umd'
        }
       
    }
}