// 第一种
function numberToValue(val){
    let arr = String(val).split('.')
    
    // 整数部分
    let inte = arr[0].split('')

    // 小数部分
    let fraction = arr[1] || ''

    // 返回的变量
    let res = ''
    // let len = inte.length

    // 倒叙并遍历
    inte.reverse().forEach((item,index)=>{
       
        // 非第一位，并且值是3的倍数
        if(index !== 0 && index % 3 === 0){
            res = item +","+res
        }else{
            res = item + res
        }
    })

    return res + (!!fraction ? '.' + fraction:'')
}

let num = numberToValue(1234.45)
console.log(num)  // 1,234.45

// 第二种
function numberToSub(val){
    let arr = String(val).split('.')
    
    // 整数部分
    let inte = arr[0] +''

    // 小数部分
    let fraction = arr[1] || ''

    // 返回的变量
    let res = ''
    let len = inte.length

    // 多余的位数
    let f = len % 3

    // 获取多余的位数，f可能是0，即r可能是空字符串
    res = inte.substring(0,f)

    for(let i =0;i<Math.floor(len / 3);i++){
        res += ',' + inte.substring(f+i*3,f+(i+1)*3)
    }

    // 多余的位数
    if(f === 0){
        res = res.substring(1)
    }

    return res + (!!fraction ? '.' + fraction:'')
}
let num1 = numberToSub(1234.45)
console.log(num1)  // 1,234.45
