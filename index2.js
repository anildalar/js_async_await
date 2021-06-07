function b(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Resolved from b function');
        },5000); 
    });
}

async function a(){
    let po = await b();
    /*
    po.then((v)=>{
        console.log('then '+v);
    }).catch((v)=>{
        console.log('catch '+v);
    }).finally((v)=>{
        console.log('finally '+v);
    });
    */
    console.log(po);
    console.log('ok');
    
}
a();