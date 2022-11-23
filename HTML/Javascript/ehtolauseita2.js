// Tarkistetaan luku onko se negatiivinen vai positiivinen
function tarkistaLuku()
{
    var luku = parseInt(document.getElementById('luku').value);
    if (luku < 0)
    {
      document.getElementById('s1').innerHTML = "Luku on negatiivinen";
    }
    else
    {
      document.getElementById('s1').innerHTML = "Luku on positiivinen";
    }
}
// Tarkistetaan viikonpäivän numero, ja muutetaan se sanaksi
function muutaSanaksi()
{
    var viikonpaiva = parseInt(document.getElementById('vkpv').value);
    switch (viikonpaiva)
    {
      case 1:
        document.getElementById('s2').innerHTML = "Maanantai";
        break;
      case 2:
        document.getElementById('s2').innerHTML = "Tiistai";
        break;
      case 3:
        document.getElementById('s2').innerHTML = "Keskiviikko";
        break;
      case 4:
        document.getElementById('s2').innerHTML = "Torstai";
        break;
      case 5:
        document.getElementById('s2').innerHTML = "Perjantai";
        break;
      case 6:
        document.getElementById('s2').innerHTML = "Lauantai";
        break;
      case 7:
        document.getElementById('s2').innerHTML = "Sunnuntai";
        break;
      default:
        document.getElementById('s2').innerHTML = "Anna luku 1-7 väliltä!";
    }
}
// Tarkistetaan onko vuosi karkausvuosi vaiko ei
function tarkistaVuosi()
{
  var vuosi = parseInt(document.getElementById('vuosi').value);
  if (vuosi % 4 == 0 && vuosi % 100 != 0)
  {
    document.getElementById('s3').innerHTML = "Vuosi on karkausvuosi";
  }
  else if (vuosi % 400 == 0)
  {
    document.getElementById('s3').innerHTML = "Vuosi on karkausvuosi";
  }
  else
  {
    document.getElementById('s3').innerHTML = "Vuosi ei ole karkausvuosi";
  }
}
// Lasketaan annettujen lukujen summa sekä keskiarvo
function laskeKeskiArvo()
{
  var luku1 = parseInt(document.getElementById('luku1').value);
  var luku2 = parseInt(document.getElementById('luku2').value);
  var luku3 = parseInt(document.getElementById('luku3').value);
  var luku4 = parseInt(document.getElementById('luku4').value);
  var luku5 = parseInt(document.getElementById('luku5').value);
  var summa, keskiarvo;
  summa = luku1 + luku2 + luku3 + luku4 + luku5;
  keskiarvo = summa / 5;
  document.getElementById('s4').innerHTML = "Antamiesi lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;
}
// Tehdään annetusta luvusta kympin kertotaulu
function teeKertoTaulu()
{
  var kertot = parseInt(document.getElementById('kerto').value);
  var tulos = "";
  for(var i = 1; i < 11; i++)
  {
    tulos += kertot + " * " + i + " = " + kertot * i + "<br/>";
  }
  document.getElementById('s5').innerHTML = tulos;
}
