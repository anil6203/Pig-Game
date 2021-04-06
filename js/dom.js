var roundscore,scores,activeplayer,gameplaying;
gameplaying=true;
zero();


//document.querySelector('#score-' + activeplayer).textContent=dice;
document.querySelector('.btn-roll').addEventListener('click',function(){
        
   if(gameplaying) {var dice = Math.floor(Math.random() * 6 + 1);
    var diceDom = document.querySelector('.dice');
    diceDom.style.display='block';
    document.querySelector('.dice').src = 'img/dice-' + dice + '.png';
    if(dice>1) {
    roundscore += dice;
    document.querySelector('#current-' + activeplayer).textContent=roundscore;
    }else{
            init();
            
        }
                 }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying){
    scores[activeplayer] += roundscore;
    document.querySelector('#score-'+ activeplayer).textContent=scores[activeplayer];
    if(scores[activeplayer]>=100)
        {
          document.querySelector('#name-' + activeplayer).textContent='Winner';
            document.getElementById('current-' + activeplayer  ).textContent=0;
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
           
        document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
            gameplaying=false;
            
        }
    else
    init();}
});
document.querySelector('.btn-new').addEventListener('click',zero);

function zero(){
    scores=[0,0];
    activeplayer=0;
    roundscore=0;
    gameplaying=true;
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('name-0').textContent='Player1';
document.getElementById('name-1').textContent='Player2';
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.dice').style.display='none';
}


    
function init(){
    activeplayer===0 ? activeplayer=1 : activeplayer=0;
            roundscore=0;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.dice').style.display='none';
            document.getElementById('current-0').textContent=0;
            document.getElementById('current-1').textContent=0;
            document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
            
}
function beg(){
    
}
