function b(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Resolved from b function');
        },5000); 
    });
}

async function a(){
    let po = await b();
    console.log(po);
    console.log('ok');
    
}


a();