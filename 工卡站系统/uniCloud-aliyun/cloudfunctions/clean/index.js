'use strict';
exports.main = async (event, context) => {
    const db = uniCloud.database();
	const dbCmd = db.command;
	let res = await db.collection('gongka').where({
		
	}).remove()
	return res
};
