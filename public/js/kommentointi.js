'use strict';

const lomakeKommentti = document.querySelector('#formKommentti');

//const moment = require('moment');
console.log(document.cookie);
const userID = document.cookie.split('=')[1];
console.log('userID is', userID);

function alkutulostus(s) {
  const kommenttienTulostus = document.querySelector('#vanhatKommentit');
  // kommenttienTulostus.innerHTML = '';
  console.log('tulosta vanhat kommentit');

  for (let i = 0; i < s.length; i++) {
    let pikkudiv = document.createElement('li');//div vaihdettu
    let postaaja = document.createElement('p');
    postaaja.innerHTML = '<b>' + s[i].kayttajaEtunimi + ' ' + s[i].kayttajaSukunimi + '</b>' + ' ' + '<small>' + s[i].kommenttiAikaleima + '</small>';

    /*let postaajaSukunimi = document.createElement('h5');
    postaajaSukunimi.innerHTML = s[i].kayttajaSukunimi;*/

   /* let leima = document.createElement('p');
    leima.innerHTML = s[i].kommenttiAikaleima;*/

    let teksti = document.createElement('p');
    teksti.innerHTML = s[i].kommenttiTeksti;

    pikkudiv.appendChild(postaaja);
    //pikkudiv.appendChild(postaajaSukunimi);
    //pikkudiv.appendChild(leima);
    pikkudiv.appendChild(teksti);

    kommenttienTulostus.appendChild(pikkudiv);
  }
}

const tulostavanhatKommentit = (evtKommentti2) => {
  console.log('tapahtuuko tämä');
  evtKommentti2.preventDefault();

//kommentin lähetys tietokantaan
  fetch('./kommenttidownload').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    alkutulostus(json);
    console.log('vanhat valmis');
  });

};

/*-----------------------------------------------------------------------------------------*/

//funktio kommenttien näyttämiseen: vanha ja toimii
function tulosta(f) {

  console.log('löysit minut');

  const vanhatKommentit = document.querySelector('#vanhatKommentit');
  vanhatKommentit.innerHTML = '';

  for (let i = 0; i < f.length; i++) {

    console.log(f[i]);

    let pikkudiv = document.createElement('li');//div vaihdettu
    let postaaja = document.createElement('p');
    postaaja.innerHTML = '<b>' + f[i].kayttajaEtunimi + ' ' + f[i].kayttajaSukunimi + '</b>' + ' ' + '<small>' + f[i].kommenttiAikaleima + '</small>';
    let teksti = document.createElement('p');
    teksti.innerHTML = f[i].kommenttiTeksti;

    pikkudiv.appendChild(postaaja);
    pikkudiv.appendChild(teksti);

    vanhatKommentit.appendChild(pikkudiv);

  }
}

const submitKommentti = (evtKommentti) => {
  evtKommentti.preventDefault();

  const data6 = JSON.stringify([
    lomakeKommentti.querySelector('input[name="kommentti"]').value,
  ]);
  const asetukset = {
    method: 'post',
    body: data6,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
//kommentin lähetys tietokantaan
  fetch('./kommenttiupload', asetukset).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    tulosta(json);
    // tyhjennä kenttä
    lomakeKommentti.querySelector('input[name="kommentti"]').value = '';
    console.log('valmis');
  });

  /*const respovkommentti = (testi) => {

    if (testi.status === 'kommentti OK') {
      alert('Kommentin Upload onnistui!');
    }
    else {
      alert('Kommentin Upload epäonnistui!');
    }
  };*/
};

document.addEventListener('DOMContentLoaded', tulostavanhatKommentit);
lomakeKommentti.addEventListener('submit', submitKommentti);

/** const vanhatKommentit = document.querySelector('#vanhatKommentit');
 vanhatKommentit.innerHTML = '';

 for (let i = 0; i < f.length; i++) {

    console.log(f[i]);

    let pikkudiv = document.createElement('li');//div vaihdettu

    let postaaja = document.createElement('h6');
    postaaja.innerHTML = f[i].kayttajaId;

    let leima = document.createElement('p');
    leima.innerHTML = f[i].kommenttiAikaleima;
    //console.log(moment().format());


    let teksti = document.createElement('p');
    teksti.innerHTML = f[i].kommenttiTeksti;

    pikkudiv.appendChild(postaaja);
    pikkudiv.appendChild(leima);
    pikkudiv.appendChild(teksti);

    vanhatKommentit.appendChild(pikkudiv);




    //poista looppi ja printtaa vain viimeinen
function tulostauusikommentti(f) {
  console.log('löysit minut');

  const vanhatKommentit = document.querySelector('#vanhatKommentit');
  vanhatKommentit.innerHTML = '';

  for (let i = 0; i < f.length; i++) {

    console.log(f[i]);

    let pikkudiv = document.createElement('li');//div vaihdettu

    let postaaja = document.createElement('h6');
    postaaja.innerHTML = f[i].kayttajaId;

    let leima = document.createElement('p');
    leima.innerHTML = f[i].kommenttiAikaleima;
    //console.log(moment().format());


    let teksti = document.createElement('p');
    teksti.innerHTML = f[i].kommenttiTeksti;

    pikkudiv.appendChild(postaaja);
    pikkudiv.appendChild(leima);
    pikkudiv.appendChild(teksti);

    vanhatKommentit.appendChild(pikkudiv);

  }

};
*/
