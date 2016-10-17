var p1 = new Promise(
        (resolve, reject)=>{
            setTimeout(function(){ 
                resolve(2);
            }, 2000);
        }
        );

p1.then((num)=>{
    console.log(num);
}).catch((err) => {
    console.log(err);
});


