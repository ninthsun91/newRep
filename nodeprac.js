const rl = require('readline').createInterface(process.stdin);

let input = [];

rl.on('line', (c)=>{
    input.push(c);

    if(input.length-1 == input[0]) rl.close();
});

rl.on('close', ()=>{
    let nums = Array.from({length:10000+1},()=>0);

    for(i=1;i<input.length;i++) {
        let n = input[i];
        nums.splice(n,1,nums[n]+1);
    }

    let result = [];
    nums.map((n,i)=>{
        if(n) {
            for(j=0;j<n;j++) result.push(i);
        }
    });

    console.log(result.join('\n'));
});

//no nothing help