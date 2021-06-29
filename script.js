var like1 = document.querySelector('#firstLike')
var like2 = document.querySelector('#secondLike')
var like3 = document.querySelector('#thirdLike')
var counter = 9
var counter2 = 12
var counter3 = 9

function add(){
    counter++;
    like1.innerHTML = counter + ' Like(s)'
}

function add2(){
    counter2++;
    like2.innerHTML = counter2 + ' Like(s)'
}

function add3(){
    counter3++;
    like3.innerHTML = counter3 + ' Like(s)'
}