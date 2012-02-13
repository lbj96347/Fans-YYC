//change the page in js for logic
function toShowList(){
  window.location='show.html';
}

//show page animation action 
function closePanel(){
  $('#slideButton1').hide();
  $('#slideButton2').show();
  $('#playbill').fadeOut(800,slideUp);
     function slideUp(){
       $("#wrapper").animate({"top": "25px"}, "slow");
     }
}
function showPanel(){
  $('#slideButton1').show();
  $('#slideButton2').hide();
  $("#wrapper").animate({"top": "192px"}, "slow",showPic);
     function showPic(){
       $('#playbill').fadeIn(1000);
     }
}

function display1(){
  $('#plus-button-1').css('display','none');
  $('#plus-button-2').css('display','');
  $('#select-menu').fadeIn(500);
  $('#shade').fadeIn(500);
}
function display2(){
  $('#plus-button-1').css('display','');
  $('#plus-button-2').css('display','none');
  $('#select-menu').fadeOut(500);
  $('#shade').fadeOut(500);
}
function hideFunButton(){
  $('#more-button-1').css('display','none');
  $('#more-button-2').css('display','');
  $('#function-button').hide('slide',{direction:'right'},500);
}
function showFunButton(){
  $('#more-button-1').css('display','');
  $('#more-button-2').css('display','none');
  $('#function-button').show('slide',{direction:'right'},500);
}
