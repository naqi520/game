module.exports = {
  runtimeCompiler: true,
  // publicPath: './',
  devServer: {
    proxy: {
     '/api2': {
       target: 'http://localhost:3000',
	   ws:true,
       changeOrigin: true,
     },
			'/api': {
			  target: 'https://www.ubisoft.com.cn',
			  ws:true,
			  changeOrigin: true,
			},
			// '/news2':{
			// 	target:'https://zh-cn.ubisoft.com',
			// 	ws:true,
			// 	changeOrigin:true
			// },
			'/forum':{
				target:'https://www.wegame.com.cn/api',
				ws:true,
				changeOrigin:true
			},
			'/originApiQ':{
				target:'https://kagame.tuiplay.com',
				ws:true,
				changeOrigin:true
			},
			'/origin':{
				target:'https://kagame.tuiplay.com',
				ws:true,
				changeOrigin:true
			},
			'/lewanapi':{
				target:'http://lewan.baidu.com',
				ws:true,
				changeOrigin:true
			}
    }
  }
}
