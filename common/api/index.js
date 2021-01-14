//批量导出文件

const requireApi = require.context(
	//api目录的相对路径
	'.',
	//是否查询子目录
	false,
	//查询文件的后缀
	/.js$/	
)

let modlue = {}

requireApi.keys().forEach((key,index) => {
	if(key === './index.js') return
	Object.assign(modlue,requireApi(key)) //得到函数
})

export default modlue
