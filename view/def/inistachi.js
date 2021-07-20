setTimeout(inistachi_auto_show,11000) ;
function inistachi_clop() { 
    if (document.querySelector('.ht-box').style.display === 'block') {
        document.querySelector('.ht-box').style.display = 'none' ;
    }else{
        document.querySelector('.ht-box').style.display = 'block' ; 
    }
 } 
 function play() {
    var audio = new Audio('audio/inistachi.mp3');
    audio.play();
  }
 function inistachi_auto_show() { 
     if (document.querySelector('.ht-box').style.display === 'block') {
         //nothing
     }else{
     play() ;
    inistachi_clop() ;
     }
  }