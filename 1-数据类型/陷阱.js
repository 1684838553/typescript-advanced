// 1. 判断是不是对象
// typeof null 返回结果也是object
function isObject(param){
    if(typeof param === "object"){
        return true
    }
    return false
}

isObject(1) // false
isObject({name:'drunk'}) // true
isObject(null) // true


// 2. 一元运算符 + 转为数字
// BigInt 数据类型不能使用 + 元算符转成数字
function toNumber(val){
    console.log(typeof +val,+val)
    return +val
}
toNumber('1')  // 1
toNumber(undefined) // NaN
toNumber(null) // 0
toNumber(false) // 0
toNumber({}) // NaN
// toNumber(1n) // TypeError: Cannot convert a BigInt value to a number


// 3. 位移转为数字
// >>> 无符号位移
// 值为 Number.MAX_SAFE_INTEGER 时，
function toNumber2(val){
    const result = val >>> 0
    console.log(result ,'toNumber2')
    return result
}

// >> 有符号位移
function toNumber3(val){
    const result = val >> 0
    console.log(result ,'toNumber3')
    return result
}
toNumber2(null) // 0
toNumber2({}) // 0
toNumber2('10x') // 0
toNumber2('10') // 10


toNumber3(null) // 0
toNumber3({}) // 0
toNumber3('10x') // 0
toNumber3('10') // 10
// 超大数
// 转成二进制后进行操作，超过32位，会出现问题
toNumber3(Number.MAX_SAFE_INTEGER)  // -1 有符号位移
toNumber2(Number.MAX_SAFE_INTEGER) // 4294967295

// 4. 字符串批量转换成整数
const arr = ['1','2','3']
arr.map(parseInt) // [ 1, NaN, NaN ]

// 相当于 item是值 index是需要转成的进制
arr.map((item,index)=>parseInt(item,index))
/*
1 0
2 1 1进制，出现2，返回NaN
3 2
*/
// parseInt 只传一个参数，默认转为10进制
console.log(arr.map(item=>parseInt(item))) // [1,2,3]  

// 5. if 条件判断
const obj = {
    name:'drunk'
}
const result = {}
function getResult(){
    if(obj.name){
        result.name = obj.name
    }
    return result
}
console.log(getResult())


// 6. 宽松比较 ==
/**
 * 1. NaN 与任何值比较都不相等，包括自身
 * 2. bigint,symbol比较时，会先比较是否是同一类型，不是就不相等
 * 3. null ,undefined  null == undefined // true null只和undefined和自己相等
 * 4. 布尔类型和其他类型相比较，布尔类型会转为数字
 * 5. 数字类型和字符串类型比较，会转成数字比较
 * 6. 对象类型和原始类型比较，对象转成原始数据类型
 * 7. 两个对象比较，比引用
 */

null == 0 // false
'0' == false // true  ===> 转数字比较 0 == 0


