window.onload = ()=>{
    
}
class Vue{

    constructor(options){
        //获取所有的属性名
        Object.keys(options.data).forEach((propertyName, index)=>{
            //实现vm访问data对象, 数据代理机制
            let firstChar = propertyName.charAt(0)
            if(firstChar.charAt(0) != "$" && firstChar!="_"){
                Object.defineProperty(this, propertyName,{
                    get(){
                        return options.data[propertyName]
                    },
                    set(val){
                        options.data[propertyName] = val
                    }
                })
            }
             
        })
        //获取所有的方法名
        Object.keys(options.methods).forEach((methodName,index)=>{
            //实现vm访问methods对象
            this[methodName] = options.methods[methodName]
        })
    } 
}