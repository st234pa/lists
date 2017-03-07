var bigList = [document.getElementById("smol1"), document.getElementById("smol2"), document.getElementById("smol3")];
console.log(bigList);

var bigfxn = function() {
    alert("big");
}

var smolfxn = function() {
    alert("smol");
}

/*
var smol = [];
for (var i = 0; i < bigList.length; i++) {
    smol[i] = bigList[i].getElementsByTagName("li");
    for (var j = 0; j < smol[i].length; j++) {
        smol
    }
}
*/

for (var i = 0; i < bigList.length;i++) {
    bigList[i].addEventListener("click", bigfxn);
}
