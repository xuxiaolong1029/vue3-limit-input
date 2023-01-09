export default (app:any) => {
    /***
    * 输入框小数位限制
    * isImplement  是否启用 true:启用  false:不执行
    * limitNumber  小数位数
    */
    app.directive('LimitInputNumber', (el:any, binding:any) => {
        let isImplement:boolean=true,limitNumber:number=2;
        console.log(Object.prototype.toString.call(binding.value))
        if(binding.value && Object.prototype.toString.call(binding.value)==='[object Object]'&& Object.keys(binding.value).length){
            isImplement = binding.value.isImplement||true
            limitNumber = binding.value.limitNumber||2
        }
        el.oninput= (event:any) => {
            let val = event.target.value;
            if(isImplement&&val){
                let RegNum = limitNumber == 0 ? `^[\\+\\-]?\\d+\\d{0,0}` : `^[\\+\\-]?\\d+\\.?\\d{0,${limitNumber}}`;
                val = val.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
                val = val.replace(/^\./g, ""); //验证第一个字符是数字
                val = val.replace(/\.{2,}/g, ".");//只保留第一个, 清除多余的
                val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                val = val.match(new RegExp(RegNum, 'g'));
                if(val != event.target.value) {// 跳出循环  
                    event.target.value = val;
                    event.target.dispatchEvent(new Event("input"));//调用input事件使vue v-model绑定更新
                }
            }  
        }
    })
}