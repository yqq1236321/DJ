'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const jobValue = event.jobValue;
	const name=event.name;
	const lastSignDate=event.lastSignDate;
	const db = uniCloud.database()
	const _ = db.command
	let res= await db.collection('gongka').where({
		
			顺序号:jobValue 
			
	}).update(
	{"状态":"领出"},
	{"领出时间":lastSignDate},
	{"负责人":name})
	//返回数据给客户端
	console.log('event2 : ', res)
	return res
};
