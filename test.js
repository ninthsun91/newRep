123456

const t1 = performance.now();

class GitTest{
    constructor(add,name){
        this.add = add
        this.name = name
    }
}

const test = new GitTest(add, name);

console.log(test);


const t2 = performance.now();
console.log(t2-t1);