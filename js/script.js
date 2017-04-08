
function odpCzer(){window.open("czerwony.html")};
function odpNieb(){window.open("niebieski.html")};
function odpBial(){window.open("bialy.html")};
function odpZol(){window.open("zolty.html")};

function submitAnswers() {
	var radios = document.getElementsByName("q"+i) ;
	
	var czerwone =0;
    var niebieski =0;
    var bialy = 0;
    var zolty =0;  
    var result = $('input[type="radio"]:checked') 
 
  for(var i = 0; i <= 45; i++) {
  var radios = document.getElementsByName("q"+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "A" && radio.checked) {czerwone +=1;}
    else if (radio.value == "B" && radio.checked) {niebieski +=1;}
    else if (radio.value == "C" && radio.checked) {bialy +=1;}
    else if (radio.value == "D" && radio.checked) {zolty+=1;}}}
if (result.length !=45 ) {alert("Nie wszystkie odpowiedzi zostały zaznaczone"); 
return false}
else if (czerwone > niebieski && czerwone > bialy && czerwone > zolty)
	{odpCzer()}
else if (niebieski > czerwone && niebieski > bialy && niebieski > zolty)
	{odpNieb()}
else if ( bialy> niebieski && bialy > czerwone && bialy > zolty){odpBial()}
else if ( zolty> niebieski && zolty > bialy && zolty > czerwone){odpZol()}
	
}




