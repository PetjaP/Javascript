/* Tehtävä 1: Funktio joka pyytää käyttäjältä parillista lukua, ja tulostaa kaikki
parilliset luvut siihen lukuun asti poislukien 0 */
function näytäParilliset()
{
  var karvo = parseInt(document.getElementById('pluku').value);
  var jono = "<p>";
  for(var i = 2; i <= karvo; i= i+2)
  {
    jono+=i;
    jono+=" ";
  }
  jono+="</p>";
    document.getElementById('parilliset').innerHTML = jono;
}
/* Tehtävä 2: Funktio joka muuttaa käyttäjän antaman sanan salasanaksi lisäten jokaisen kirjaimen
väliin Ö kirjaimen*/
function muutaSana()
{
  var msana = document.getElementById('msana').value;
  var salasana = "<p>";
  for(var s = 0; s < msana.length; s++)
  {
    salasana += msana[s] + 'Ö';
  }
  salasana += "</p>";
  document.getElementById('salas').innerHTML = salasana;
}
// Tehtävä 3: Funktio joka tarkistaa onko käyttäjän antamassa sanassa ö kirjain. //
function onkoÖ()
{
  var annettuSana = document.getElementById('asana').value;
  var vastaus = 'Eipä kuule ole.';
  for(var o = 0; o < annettuSana.length; o++)
  {
    if(annettuSana[o] == 'ö' || annettuSana[o] == 'Ö')
    {
      vastaus = 'Onhan siinä.';
    }
  }
  document.getElementById('vastaus').innerHTML = '<p>' + vastaus + '</p>';
}
// Tehtävä 4: Funktio, joka laskee annetun luvun kertoman (esim: 4 -> 4*3*2*1 = 24) //
function kertomaLaske()
{
  var kerLuku = document.getElementById('kertoma').value;
  var laskettu = 1;
  for(var z = 1; z <= kerLuku; z++)
  {
    laskettu*=z;
  }
  document.getElementById('annakertoma').innerHTML = '<p>Antamasi luvun ' + kerLuku + ' kertoma on '+laskettu + '</p>';
}
/* Tehtävä 5: Funktio, joka tulostaa näytölle luvut 1-100, kuitenkin siten, että jos luku on 3:lla
 jaollinen, tulostetaan hip ja viidellä jaollinen tulostetaan heijaa
 ja jos sekä viidellä että kolmella jaollinen, tulostetaan hipheijaa. */
function hipHeijaa()
{
  var tuloste = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0)
    {
      tuloste+='Hip Heijaa ';
    }
    else if(y%5 == 0)
    {
      tuloste+='Heijaa ';
    }
    else if(y%3 == 0)
    {
      tuloste+='Hip ';
    }
    else {
      tuloste+=y+' ';
    }
    document.getElementById('luvut').innerHTML = tuloste;
  }
}
// Tehtävä 6: Funktio joka tulostaa kymmenen ensimmäistä numeroa. //
function ekatKymmenen()
{
  var kym = '<p>';
  for(var j = 1; j <=10; j++)
  {
    kym += j + ' ';
  }
  kym += '</p>';
  document.getElementById('10lukua').innerHTML = kym;
}
// Tehtävä 7: Funktio joka laskee kymmenen ensimmäistä lukua yhteen. //
function yhteen()
{
  yhteensa = 0;
  for(var y = 1; y <=10; y++)
  {
    yhteensa += y;
  }
  document.getElementById('luvutYhteen').innerHTML = '<p>'+ yhteensa + '</p>';
}
/* Tehtävä 8: Funktio joka kysyy käyttäjältä kahta lukua ja
laskee ensimmäisen potenssiin toinen esim. 5 ja 2 = 52 = 25 */
function koroPot()
{
  var koro = document.getElementById('kor').value;
  var pote = document.getElementById('pot').value;
  yht = koro;
  for(var p = 1; p < pote; p++)
  {
    yht *= koro;
  }
  document.getElementById('potenssi').innerHTML = '<p>' + yht + '</p>';
}
// Tehtävä 9: Funktio joka etsii annetuista luvuista suurimman ja pienimmän numeron. //
function suurinPienin()
{
  var taulu = [], temp;
  for(var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('suuripieni').innerHTML = '<p>Pienin luku on: ' + taulu[0] + ' ja suurin luku on: '+ taulu[taulu.length-1];
}
/* Tehtävä 10: Tämä funktio muuntaa annetun sanan salasanaksi kuten tehtävässä 2, mutta arpoo
kirjaimen Ö kirjaimen lisäämisen sijasta. */
function arvoSalas()
{
  var pw = '';
  var eka, toka;
  pw = document.getElementById('salasana').value;
  var kirj = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
  var temp = [];
  var lop='';
  for(var s = 0; s < pw.length; s++)
  {
    eka = pw[s];
    temp.push(eka);
    var lisa = Math.floor(Math.random()*kirj.length);
    toka = kirj[lisa];
    temp.push(toka);
  }
  lop = temp.join('');
  document.getElementById('uusisalas').innerHTML = lop;
}
/* Tehtävä 11: Funktio joka pyytää käyttäjältä kahta numeroa (jälkimmäisen tulee olla isompi)
ja tulostaa tuolla välillä parilliset ja parittomat numerot sekä niiden summat. */
function näytäLuvut()
{
  var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
  nro1 = parseInt(document.getElementById('pnro').value);
  nro2 = document.getElementById('tnro').value;
  if(nro1%2 == 0)
  {
    palku = nro1;
  }
  else {
    palku = nro1+1;
  }
  for(var b = palku; b<=nro2; b+=2)
  {
    pluvut += b + ' ';
    psumma += b;
  }
  if(nro1%2 == 0)
  {
    ralku = nro1+1;
  }
  else {
    ralku = nro1;
  }
  for(var r = ralku; r<=nro2; r+=2)
  {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById('parillitonpari').innerHTML = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
}
