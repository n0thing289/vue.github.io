class Vue{
    constructor(option){
        //实现data
        Object.keys(option.data).forEach((propertyName, index)=>{
            Object.defineProperty(this, propertyName, {
                get(){
                    return option.data[propertyName]
                },
                set(val){
                    option.data[propertyName] = val
                }
            })
        })

        //实现methods
        Object.keys(option.methods).forEach((methodName, index)=>{
            this[methodName] = option.methods[methodName]
        })
    }
}