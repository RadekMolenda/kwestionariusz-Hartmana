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

function odpCzer(){ window.open("czerwony.html") };
function odpNieb(){ window.open("niebieski.html") };
function odpBial(){ window.open("bialy.html") };
function odpZol(){ window.open("zolty.html") };

function submitAnswers() {
  var radios,
      radio,
      odpowiedzi = {
        "A": 0,
        "B": 0,
        "C": 0,
        "D": 0
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

  var czerwone = odpowiedzi["A"];
  var niebieski = odpowiedzi["B"];
  var bialy = odpowiedzi["C"];
  var zolty = odpowiedzi["D"];
  
  if (result.length !=45 ) {
    alert("Nie wszystkie odpowiedzi zostały zaznaczone");
    return false;
  } else if (czerwone > niebieski && czerwone > bialy && czerwone > zolty) {
    odpCzer();
  } else if (niebieski > czerwone && niebieski > bialy && niebieski > zolty) {
    odpNieb();
  } else if ( bialy> niebieski && bialy > czerwone && bialy > zolty) {
    odpBial();
  } else if ( zolty> niebieski && zolty > bialy && zolty > czerwone){
    odpZol();
  }
}

$(document).ready(function(){
  $('input').on('change', function(){
    localStorage.setItem($(this).attr("name"), $(this).attr("value"));
  });
});
