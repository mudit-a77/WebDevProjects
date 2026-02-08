const p1button = document.querySelector('#p1');
const p2button = document.querySelector('#p2');
const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const resetb = document.querySelector("#reset");
const setScore = document.querySelector('#score');  
let p1Points = 0;
let p2Points = 0;
let isGameOver = false;
let wScore;

p1button.addEventListener('click', function(){
    if(!isGameOver){
        p1Points+=1;
    if(p1Points === wScore ){
        isGameOver=true;    
    }
p1score.textContent=p1Points;
}
})
p2button.addEventListener('click', function(){
    if(!isGameOver){
        p2Points+=1;
    if(p2Points === wScore ){
        isGameOver=true;    
    }
p2score.textContent=p2Points;
}
})

resetb.addEventListener('click',reset)

setScore.addEventListener('change',function(){
   wScore =parseInt(this.value);
   reset();
})


function reset(){isGameOver = false;
    p1Points=0;
    p2Points=0;
    p1score.textContent = 0;
    p2score.textContent = 0;
}