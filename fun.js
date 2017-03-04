var globalFun={
    isArray:function (obj) {
        return Object.prototype.toString.call(obj)=='[object Array]';
    }
}
module.exports=globalFun;