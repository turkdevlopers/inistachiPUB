var imgs = function(wich){
    console.log('sda') ;
    return document.querySelector('#portfolio > div > div > div:nth-child( '+wich+' ) > a > div') ;
  } ;
  
  imgs(1).addEventListener('click',function(){
     window.open("view/def",'_blank')   ;
  }) ;
  imgs(2).addEventListener('click',function(){
     window.open("view/hgd",'_blank')   ;
  }) ;
  imgs(3).addEventListener('click',function(){
     window.open("view/tmd",'_blank')   ;
  }) ;