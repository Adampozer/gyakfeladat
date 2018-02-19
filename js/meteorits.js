function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var data = xhttp.responseText;
    // Innen, ide dolgozz... Itt hívd meg a függvényeid stb. A json file tartalma innen érhető csak
    // Live servert használd mindig
    tizedes()
    tomeg()
}

getData('/js/meteorits.json', successAjax);



function begin(jsonfile){

    for(var i=0;i<jsonfile.length;i++){


    document.querySelector('#result').innerHTML += `<tr><td>${jsonfile[i].id}</td>
    <td>${jsonfile[i].mass}</td><td>${jsonfile[i].name}</td><td>${jsonfile[i].nametype}</td>
    <td>${jsonfile[i].recclass}</td><td>${jsonfile[i].reclat}</td><td>${jsonfile[i].reclong}</td>
    <td>${jsonfile[i].year}</td></tr>`;
    

}

    }


function tizedes(){
for (var i = 0; i < jsonfile.length; i++){
var mass = document.querySelector('#mass').value;
mass[i].toFixed(2);

}



}


function tomeg(){
var osszeg=0;
var min=jsonfile[0].mass;
var max = jsonfile[0].mass;
var darab=0;

for (var i = 0; i < jsonfile.length; i++){
    if (min>jsonfile[i].mass){
        min = jsonfile[i].mass;
    }

 if (max < jsonfile[i].mass) {
     max = jsonfile[i].mass;
 }

    osszeg+= jsonfile[i].mass;

    darab++;

}

}

document.querySelector('#szamolas').innerHTML=osszeg;
document.querySelector('#szamolas').innerHTML=min;
document.querySelector('#szamolas').innerHTML=max;
document.querySelector('#szamolas').innerHTML = osszeg / darab;
document.querySelector('#szamolas').innerHTML = darab2;
document.querySelector('#szamolas').innerHTML = darab3;

function becsapodas(){
for (var i = 0; i < jsonfile.length; i++) {
var darab2=0;
var darab3=0;


    if(jsonfile[i].year.indexOf(1990)>-1)
        darab2++;

    if(jsonfile[i].mass>=10000){
        darab3++;

    }

}



}








/* 
    A kapott JSON file a Föld-be csapódott meteoritok adatait tartalmazza.

    FELADATOK:
    1. Írasd ki egy táblázatba a következő adatait a meteoritoknak:
        id
        mass
        name
        nametype
        recclass
        reclat
        reclong
        year

     Pozitív, ha ezeket az elemeket nem az innerHTML segítségével hozod létre. 

    2. A táblázatban formázd a tömeget 2 tizedes jegy pontosan. Ha kell kerekíts a legközelebbi egészre.
       A matamatikai kerekítés szabályait használd. Ha valahol egész érték van, ott is legyen a 00 kiiratva
       az egész érték után .
       Formázd a dátumot az alábbi formátumba: 1990. 01. 02. 
    
    3. A táblázat fejlécére kattintva növekvő sorrendbe lehessen rendezni a táblázat adatait az alábbi
       meteorit tulajdonságok szerint: id, mass, name, és reclass.
       Az id és a mass szerinti rendezés számok alapján rendezzen.

    4.  Valósítsd meg a rendezést úgy, hogy nem csak növekvő, hanem csökkenő sorrendbe is lehessen az adatokat rendezni.
        Ha az adatok még nincsenek rendezve, akkor az adott fejlév/tulajdonság alapján növekvő sorrendbe rendezze az adatokat kattintásra.
        Amennyiben még egyszer ugyanarra a fejlécre kattintanak, akkor a sorrend legyen csökkenő. És így tovább....
        Amennyiben egy új fejlécre kattintanak, először mindig növekvő sorrend szerint legyenek az  adatok rendezve.

    5. A táblázat alá az alábbi adatokat ki kell iratni/számolni:

        Az összes meteorit összsúlya
        A legkönyebb meteorit súlya
        A legnehezebb meteorit súlya
        A meteoritok súlyának átlaga
        Hány darab meteorit csapódott be 1990-ben
        Hány darab meteorit súlya legalább 10000

        Ezeket az elemeket ne az innerHTML segítségével hozd létre. Használd az ismert node metódusokat. KÖTELEZŐEN!

    6. Legyen szép a táblázat és az adatok. HAsználj CSS-t a formázáshoz.

    7. Töltsd fel az elkészült fileokat egy github repoba, és küld el a repo elérhetőségét.

    8. Szusszanj egyet.

*/





