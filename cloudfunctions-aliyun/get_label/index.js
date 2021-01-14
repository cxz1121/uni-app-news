'use strict';
const db = uniCloud.database(); //数据库的引入
exports.main = async (event, context) => {
	//获取Label表的数据
	let label = await db.collection('label').get();
	
	//返回数据给客户端
	return {
		code: 200,
		msg: '请求成功',
		data: label.data
	}
};
