const info1 = document.getElementById('information1');
// js file for Main Menu:

function menuClick(clickedButton){
  let informaatio;
  
  switch (clickedButton){
    case 'Seura':
      informaatio = '<p>Osu!</p>'+
        '<p>Seuramme on Jyväskylässä toimiva Kyukushin-karate seura. Seuramme on osa IKO Kyokushinkaikan organisaatiota (IKO Matsui), jonka pääpaikka Suomessa on'+
        ' Turku, ja päävalmentaja Rebwar Shekhi. Kuulumme Suomen Karateliittoon.</p>';
    break;
    case 'Kyokushinkai Karate':
informaatio = '<p class= "infoText">Kyokushin on korealaissyntyisen Sosai Masutatsu Oyaman vuonna 1964 kehittämä karaten tyylisuunta. Se on eräs maailman suurimmista karaten tyylisuunnista. Kyokushin-tyylin ominaispiirteitä ovat kova ja realistinen harjoittelu, sparraus, sekä täydellä kontaktilla käytävät knockdown-ottelut, joissa myös reisiin kohdistuvat alapotkut ovat sallittuja. Lajilla on harrastajia yli 12 miljoonaa yli sadassa maassa. Kyokushinkai tarkoittaa ’’Lopullisen totuuden koulukuntaa/järjestöä’’. Se kuuluu maailmalla viiden suosituimman karatetyylin joukkoon. Kyokushin-karateen kuuluvat erilaiset lyönnit, potkut, tartunnat ja kaadot sekä nivellukot. Kyokushin karate poikkeaa muista karaten tyylisuunnista ottelu- ja harjoitussovelluksiltaan, olemalla suoraviivaisempi, intensiivisempi ja kovempi harjoitusmenetelmiltään. Kyokushin-karate tunnetaankin maailmanlaajuisesti vahvimpana karatena kovien treenimetodien, vaativien vyökokeiden ja täyskontaktiotteluidensa ansiosta.</p>'+
'<p class= "infoText">Kyokushin karatessa vaalitaan vahvasti karaten perinteitä. Kihonia (perustekniikkaa) ja kataa (muotoja) harjoitellaan paljon. Myös ottelu- sekä välineharjoittelu ovat tärkeässä osassa. Kyokushin karatessa pyrkimys on säilyttää alkuperäisen karaten kolme perusasiaa: kihon, kata ja kumite sekä näiden erilaiset sovellukset.</p>'+
'<p class= "infoText">Tyypillinen Kyokushin-karateharjoitus alkaa perustekniikalla ja loppuu otteluharjoitukseen. Perustekniikka pidetään koko karaten perustana. Perustekniikkaa harjoitellaan niin kihon muodossa rivissä kuin kihon ido-geiko muodossa liikkuen ja suorittaen ennalta määrättyjä liikesarjoja. Perustekniikkaa tehdessä jokaisen harjoittelijan pitäisi aina ajatella jokainen lyönti, torjunta ja potku viimeisenä. Harrastajien ja lajin keskeisiä mottoja onkin ”Osu no seishin” – periksiantamattomuus paineen alla tai ”Älä koskaan luovuta”.</p><p><i>teksti: wikipedia</i></p>'
    break;
    case 'Ajankohtaista':
      console.log('clicked: ', clickedButton);
    break;
    case 'Treenit ja liity mukaan':
      informaatio = '<p>Treenaamme tällä hetkellä sekä sisällä että ulkona. Meillä ei ole vakinaista treeniohjelmaa, vaan treenaamme '+
'sen mukaan miten porukka pääsee paikalle. Treenien määrä järjestyy sen mukaan, miten porukalla on intoa, eli '+ 
'vaikkapa jokapäivä, tai kerran viikossa.</p>'+
'<p>Koska seuralla ei ole tällä hetkellä varattuja salivuoroja, ei harjoittelusta peritä maksua. Seuran jäsenmaksu on '+ '15 €/hlö vuodelle 2019, jolla katetaan mm. Suomen karateliiton ja IKO Kyokushinkaikanin lisenssimaksut.'+ 
' Harjoittelijamäärän kasvaessa käymme avoimesti läpi, mitä oman tilavaruksen kustannukset tulevat olemaan '+
'ja yhdessä päätämme olemmeko siihen valmiita sitoutumaan.</p>'+
'<p>Päävastuullisena valmentajana Jyväskylässä toimii Sami Kinnunen. Samia avustavat myös muut ohjaajat. Vyökokeet '+ 
'järjestää ja vyöt myöntää päävalmentajamme Rebwar Sekhi.</p>'+
'<p>Jos haluat mukaan, niin ota yhteyttä Samiin (p.040 962 1851 tai finjutsu(a)hotmail.com). Aikaisempaa kokemusta ei'+ 
' vaadita ja kaikki ovat tervetulleita.</p>'+
'<a href="https://www.facebook.com/567391464/videos/10156368917901465/?id=567391464" target="_blank"</a>Valmentaja Samin EM-kisaottelu. Sami vasemmalla. (facebook video)';  
      //window.location = "https://thenewgame.glitch.me/skirmish"; 
    break;
    case 'Ota yhteyttä':
      informaatio = 'Valmentaja Sami Kinnunen, 0409621851 finjutsu(a)hotmail.com <br>'+
        'Nettisivuvastaava Petri Räsänen, rasanen.petri(a)gmail.com';
    break;  
    case 'Dojo kun':
informaatio = '<p class= "infoText">Dojo kun, eli dojo vala on tiivistelmä mihin kyokushin pyrkii, kovan harjoittelun kautta. Dojo kunin on'+ 'kirjoittanut Sosai Oyama, Eijji Yoshikawan (Miyamoto Musashi kirjan kirjoittaja), avustuksella. <br><br>'+
'Englanniksi:<br><br>'+

'We will train our hearts and bodies<br>'+
'for a firm unshaking spirit.<br><br>'+

'We will pursue the true meaning of the Martial Way,<br>'+
'so that in time our senses may be alert.<br><br>'+

'With true vigour,<br>'+
'we will seek to cultivate a spirit of self denial.<br><br>'+

'We will observe the rules of courtesy,<br>'+
'respect our superiors,<br>'+
'and refrain from violence.<br><br>'+

'We will follow our religious principles,<br>'+
'and never forget the true virtue of humility.<br><br>'+

'We will look upwards to wisdom and strength,<br>'+
'not seeking other desires.<br><br>'+

'All our lives, through discipline of karate,<br>'+
'we will seek to fulfil the true meaning of the<br>'+
'Kyokushin Way.<br><br>'+

'Japaniksi<br><br>'+

'Hitotsu, ware ware wa, shinshin o renmashi kakko fubatsu no shingi o kiwameru koto.<br><br>'+

'Hitotsu, ware ware wa,bu no shinzui o kiwame, ki ni hasshi, kan ni bin naru koto.<br><br>'+

'Hitotsu, ware ware wa, shitsujitsu goken o mot-te, jiko no seishin o kanyo suru koto.<br><br>'+

'Hitotsu, ware ware wa, reisetsu o omonji, chojo o keishi, sobo no furumai o tsutsushimu koto.<br><br>'+

'Hitotsu, ware ware wa, shinbutsu o totobi, kenjo no bitoku o wasurezaru koto.<br><br>'+

'Hitotsu, ware ware wa, chisei to tairyoku to o kojo sase, koto ni nozonde ayamatazaru koto.<br><br>'+

'Hitotsu, ware ware wa, shogai no shugyo o karate no michi ni tsuji, Kyokushin no michi o matto suru koto.<br><br></p>';
    break; 
    case 'Vyökoe syllabus':
      informaatio = 'Lisätään myöhemmin...';
    break; 
    case 'Linkit':
      informaatio = '<p>'+
'<a href="http://www.kyokushinkaikan.org/en/index.html" target="_blank"</a>Virallinen liiton sivusto</p><p>'+
'<a href="http://www.kyokushinturku.fi/" target="_blank"</a>Kyokushin Turku</p><p>'+
'<a href="http://kyokushinkaikan.org" target="_blank"</a>IKO Kyokushinkai</p><p>'+
'<a href="https://karateliitto.fi/fi/" target="_blank"</a>Suomen karateliitto</p>';
    break;  
    default: console.log('menuClick: not found clickedButton', clickedButton);  
  }
  info1.innerHTML = informaatio;
}

//  -------- ONLOAD:  ------------
window.onload = ()=> {
  // start photos:
  info1.innerHTML = '<img src= "https://cdn.glitch.com/8e965a5c-48b1-4c8d-b6ae-d2a3d2bf7452%2FmasOyama.jpg?1545930871997">'+
    '<br><i>Kyokushinkai karaten perustaja Mas Oyama (kuva: Wikipedia)</i><br><br>'+
    '<img id = "coaches" src= "https://cdn.glitch.com/8e965a5c-48b1-4c8d-b6ae-d2a3d2bf7452%2Fkaratevalmentajat.jpg?1546252722612">'+
    '<br><i>Shokei Matsui, IKO 1:n Kancho(Director) ja päävalmentajamme Rebwar Shekhi <br>(kuva: R. Shekhi)</i><br><br>';
};
