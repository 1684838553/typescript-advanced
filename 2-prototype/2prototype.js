function QQUser(QQNo, QQAge, QQMark) {
  this.QQNo = QQNo;
  this.QQAge = QQAge;
  this.QQMark = QQMark;
}

QQUser.prototype.QQMark = "abc";

QQUser.prototype.commonfriends = ["骑驴看海", "大漠上的英雄", "小草"];
QQUser.prototype.show = function () {
  console.log(`QQ号：${this.QQNo},QQ龄：${this.QQAge},QQ标注：${this.QQMark}`);
  console.log(`共同好友：${this.commonfriends}`);
};

let zhangshan = new QQUser("张三", 15, "王阳明传人");
let lisi = new QQUser("里斯", 5, "张飞弟子");
let liuwu = new QQUser("刘五", 11, "飞来的鸭子");

zhangshan.show();
lisi.show();
liuwu.show();

// 打印的是实例上的值而不是prototype上的
// 说明用对象访问一个属性时，会先访问实例上的属性，实例上没有找到该属性，就会在原型上查找
// 实例对象和__proto__对象，是一种继承关系
console.log("zhangshan.QQMark:", zhangshan.QQMark);
