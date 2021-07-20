var imgs = function(wich){
    return document.querySelector('body > div.boxes > div > div:nth-child( '+wich+' ) > img') ;
} ;

imgs(2).addEventListener('click',function(){
    window.location.href = "view/def" ;
}) ;
imgs(3).addEventListener('click',function(){
    window.location.href = "view/hgd" ;
}) ;
imgs(4).addEventListener('click',function(){
    window.location.href = "view/tmd" ;
}) ;