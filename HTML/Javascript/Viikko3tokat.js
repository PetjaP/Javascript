// Määritetään funktio joka laskee pisteet perustuen Scrabble peliin //
function laskePisteet()
{
  var pisteet = 0;
  var annettuSana = document.getElementById('sanat').value;
  for(var i = 0; i < annettuSana.length; i++)
{ // Pisteiden määrittely kirjaimien perusteella //
  switch (annettuSana[i]) {
    case 'a':
    case 'e':
    case 'i':
    case 'n':
    case 's':
    case 't':
    case 'A':
    case 'E':
    case 'I':
    case 'N':
    case 'S':
    case 'T':
      pisteet++;
      break;
    case 'o':
    case 'ä':
    case 'k':
    case 'l':
    case 'O':
    case 'Ä':
    case 'K':
    case 'L':
      pisteet+=2;
      break;
    case 'u':
    case 'm':
    case 'U':
    case 'M':
      pisteet+=3;
      break;
    case 'y':
    case 'h':
    case 'j':
    case 'p':
    case 'r':
    case 'v':
    case 'Y':
    case 'H':
    case 'J':
    case 'P':
    case 'R':
    case 'V':
      pisteet+=4;
      break;
    case 'ö':
    case 'd':
    case 'Ö':
    case 'D':
      pisteet+=7;
      break;
    case 'b':
    case 'f':
    case 'g':
    case 'B':
    case 'F':
    case 'G':
      pisteet+=8;
      break;
    case 'c':
    case 'C':
      pisteet+=10;
      break;
    default:
      pisteet+=12;
}
  document.getElementById('tscrabble').innerHTML = "<p>Sanan " + annettuSana + " pisteet ovat: " + pisteet + "</p>";
}
}
// Määritetään funktio joka arpooo lottonumerot //
function arvoLotto()
{
  var lnumerot = [];
  var temp;
  for(var lotto = 0; lotto < 7; lotto++)
  { // Lottonumeroiden random arvonta //
    temp = Math.floor(Math.random()*40)+1;
    lnumerot[lotto] = temp;
  }//Määritelllään numerot näytettäväksi pienimmästä suurimpaan //
  lnumerot.sort(function(a, b){return a - b});

  document.getElementById('tlotto').innerHTML = '<p>'+lnumerot+'</p>';
}
/* Määritetään funktio joka muuntaa javascriptissa annetun 2-D taulukon
taulukkomuotoon */
function muunnaTaulukoksi()
{
  var jana = [];
  //Tähän alle määritetään luvut jotka muutetaan taulukoksi //
  jana = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  var taulu = '<table border="3">';
  for(var j = 0; j < jana.length; j++)
{
    taulu += '<tr>';
    for(var k = 0; k < jana[j].length; k++)
    {
    taulu += '<td>' + jana[j][k] + '</td>';
    }
    taulu += '</tr>';
}
  taulu += '</table>';
  document.getElementById('ttaulu').innerHTML = taulu;
}

/* Määritetään funktio joka tekee kaikista korttipakan korteista kaksi sisäkkäistä
silmukkaa ja arpoo niiden jälkeen viisi korttia */
function arvoKortit()
{ // Sisäkkäiset silmukat //
  var pakka = [''];
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  // Maat = 'pata','risti','ruutu', 'hertta' //
  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;
  for(m = 0; m < maat.length; m++)
  {
  for(n = 0; n < numerot.length; n++)
  {
    if(m == maat.length-1 && n == numerot.length-1)
    {
      pakka[laskuri] = maat[m] + numerot[n];
    }
    else {
      pakka[laskuri] = maat[m] + numerot[n];
      laskuri++;
    }

    }
}
  // Korttien random arvonta //
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById('apakka').innerHTML = '<p>'+kortit+'</p>';
}
