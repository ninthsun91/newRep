"use strict";
const Sam = { name: 'Sam' };
function showName() {
    console.log(this.name);
}
const a = showName.bind(Sam);
a();


// conflict b1

// edit test branch

