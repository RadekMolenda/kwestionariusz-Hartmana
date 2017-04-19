$(document).ready(function(){
  for (var i = 0; i < localStorage.length; i++){
    var name = localStorage.key(i);
    var value = localStorage.getItem(localStorage.key(i));

    var allRadiosWithAValue = $("input:radio[value=" + value + "][name=" + name +"]");
    //check radios one by one using each method
    allRadiosWithAValue.each(function() {
      $(this).prop("checked", true);
    });
  }
});

function submitAnswers() {
  var radios,
      radio,
      odpowiedzi = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
      },
      result = $('input[type="radio"]:checked');

  for(var i = 0; i <= 45; i++) {
    radios = document.getElementsByName("q"+i);
    for(var j = 0; j < radios.length; j++) {
      radio = radios[j];
      if(radio.checked) {
        odpowiedzi[radio.value] += 1;
      }
    }
  }

var arr = Object.keys( odpowiedzi ).map(function ( key ) { return odpowiedzi [key]; });
var max = Math.max.apply( null, arr );

  if (result.length !=45 ) {
   alert("Nie wszystkie odpowiedzi zostały zaznaczone");
    return false;
  }

switch (max){
  case odpowiedzi.A:
   window.open("czerwony.html");
   break;
  case odpowiedzi.B:
   window.open("niebieski.html");
   break;
  case odpowiedzi.C:
    window.open("bialy.html");
    break;
 case odpowiedzi.D:
   window.open("zolty.html") ;
    break;
   }
}

$(document).ready(function(){
  $('input').on('change', function(){
    localStorage.setItem($(this).attr("name"), $(this).attr("value"));
  });
});
