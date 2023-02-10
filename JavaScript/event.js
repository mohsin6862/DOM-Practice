
// option 2
function makeGolden (){

    document.body.style.backgroundColor = "gold";
}
function makeBlue (){

    document.body.style.backgroundColor = "blue";
}
function makeGoldenrod (){

    document.body.style.backgroundColor = "goldenrod";
}
function makeAqua (){

    document.body.style.backgroundColor = "aqua";
}


// option 3

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){

    document.body.style.backgroundColor = 'purple';
}


const pinkButton = document.getElementById('make-pink');
pinkButton.onclick = function makePink(){
    document.body.style.backgroundColor = 'pink';
}


const orangeButton = document.getElementById('make-orange');
orangeButton.onclick = function makeOrange (){

    document.body.style.backgroundColor = 'orange';
}