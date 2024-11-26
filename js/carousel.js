var slideIndex = 1;

var sIndices = {

};

let carousels = document.getElementsByClassName('carousel');
for (i of carousels) {
    sIndices[i.id] = document.querySelectorAll(`#${i.id} .cslide`).length - 1;
    next(i.id);
}

function next(parent) {
    showDivs(sIndices[parent] += 1, false, parent);
}
function prev(parent) {
    showDivs(sIndices[parent] -= 1, true, parent);
}

function showDivs(n, prev, parent) {
    var m = n + (prev? 1: -1);
    var x = document.querySelectorAll(`#${parent} .cslide`);
    if (n > x.length) {sIndices[parent] = 1} ;
    if (n < 1) {sIndices[parent] = x.length} ;
    if (m > x.length) {m = 1} ;
    if (m < 1) {m = x.length} ;
    x[m - 1].style.animationName = prev? "exit-left": "exit-right";
    x[sIndices[parent] - 1].style.animationName = prev? "enter-right": "enter-left";
}