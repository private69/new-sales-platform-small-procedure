// 测试全局对象
class bus {
    constructor() {

    }
    // 静态方法
    static $once(event ,callback){
        console.log(event);
        // window.alert("event")
        // callback()
    }
    static $on(){}
}
// bus.$once('a');
export default bus 