const nemo=['nemo'];

function findNemo(array){
  let t0=performance.now();
    for(let i=0;i<array.length;i++){
        if(array[i]=='nemo'){
            console.log('found nemo')
        }
    }
      let t1=performance.now();
      console.log(t1-t0)
}

findNemo(nemo)