
//判断当前日期为当年第几周
var getYearWeek = function (date1) {
  var Date1 = new Date()
  console.log('1',Date1)
  var y = Date1.getFullYear()
  var Date2 = new Date(y + "/1/1")
  console.log('2',Date2)
  var dayOfWeek = Date2.getDay();
  //如果把周日算在一周的最后一天，请加上下面这句
  dayOfWeek = dayOfWeek == 0 ? 7 : dayOfWeek
  //如果把周日算在一周的第一天，请删除上面这句
  var num = (Date1 - Date2) / 1000 / 3600 / 24
  var whichWeek = Math.ceil((num + dayOfWeek) / 7)
  return whichWeek

  console.log("您查询的日期在本年度的第" + whichWeek + "周！")
}

module.exports = {
  getYearWeek: getYearWeek
}
