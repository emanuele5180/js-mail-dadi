//Per quello delle mail far inserire all'utente una mail e controllare se è nell'array, che contiene quelle valide. Dare all'utente un messaggio opportuno.
var elencoMailValide = ["topolino@uno.com", "pippo@uno.com", "pluto@uno.com"];
var mail = prompt( "inserisci la tua mail");
var mailTrovata = false;

for (var i = 0; i < elencoMailValide.length; i++) {
  //console.log(elencoMailValide[i]);

  if (mail == elencoMailValide[i]) {
    mailTrovata = true;
    //console.log("mail corretta");

  }

}

if (mailTrovata = elencoMailValide) {
  console.log("mail corretta");

} else {
  console.log("rifai!");
}
