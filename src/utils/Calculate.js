// 小数加减乘除运算
function accAdd(arg1, arg2){
    // 小数加
    var sq1, sq2, m;
    try{
        sq1 = arg1.toString().split(".")[1].length;
    }catch(e){
        sq1 = 0;
    }
    try{
        sq2 = arg2.toString().split(".")[1].length;
    }catch(e){
        sq2 = 0;
    }
    m = Math.pow(10,Math.max(sq1, sq2));
    return (arg1 * m + arg2 * m) / m; 
}

function accSub(arg1, arg2) {
    // 小数减
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

function accMul(arg1, arg2) {
    // 小数乘
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

// function accDiv(arg1, arg2) {
//     // 小数除
//     var t1 = 0, t2 = 0, r1, r2;
//     try {
//         t1 = arg1.toString().split(".")[1].length;
//     }
//     catch (e) {
//     }
//     try {
//         t2 = arg2.toString().split(".")[1].length;
//     }
//     catch (e) {
//     }
//     with (Math) {
//         r1 = Number(arg1.toString().replace(".", ""));
//         r2 = Number(arg2.toString().replace(".", ""));
//         return (r1 / r2) * pow(10, t2 - t1);
//     }
// }
export default {accAdd, accSub, accMul}