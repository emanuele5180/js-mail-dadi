// si lanciano due dadi, uno per il computer e uno per il giocatore e si determina chi ha vinto.

document.getElementById("launch").addEventListener("click", function(){
  var dado1 = Math.floor( Math.random ()*6)+1;
  var dado2 = Math.floor( Math.random ()*6)+1;
  // console.log(dado1);
  // console.log(dado2);
  if (dado1 > dado2) {
    console.log("hai vinto giocatore 1"); ;


  }else if (dado2 > dado1){
    console.log("hai vinto Skynet");

  }else {
    console.log("pari! rifai");
  }
  //document.getElemenntsById('risultato').innerHTML = "";

});
