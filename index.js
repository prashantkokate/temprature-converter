cel=document.getElementById('cel')
fer=document.getElementById('fer')
btn=document.getElementById('btn')
cel.addEventListener('input',function(){
    let c=cel.value;
    let f=(c *9/5) + 32;
    if(!Number.isInteger(f)){
        f=f.toFixed(4)
    }
    fer.value=f;
})
fer.addEventListener("input",function(){
    let f=fer.value;
    let c=(f-32) * 5/9
    if(!Number.isInteger(c)){
        c=c.toFixed(2)
    }
    cel.value=c;
})
