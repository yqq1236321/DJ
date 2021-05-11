'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const airplane = event.airplane;
	const date=event.date;
	const db = uniCloud.database()
	const _ = db.command
	let res= await db.collection('gongka').where({
						
						 机号:airplane,
						 安排日期:date
						
					})
					.orderBy('包号')
					.get()
					
						
	//返回数据给客户端
	console.log('event2 : ', res)
	return res
};
