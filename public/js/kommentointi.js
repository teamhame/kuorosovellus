'use strict';

const lomakeKommentti = document.querySelector('#formKommentti');

console.log(document.cookie);
const userID = document.cookie.split('=')[1];
console.log('userID is', userID);

//funktio kommenttien näyttämiseen
function tulosta(f) {

  console.log('löysit minut');

  const vanhatKommentit = document.querySelector('#vanhatKommentit');
  vanhatKommentit.innerHTML = '';

  for (let i = 0; i < f.length; i++) {

    console.log(f[i]);

    let pikkudiv = document.createElement('div');

    let postaaja = document.createElement('h6');
    postaaja.innerHTML = f[i].kayttajaId;

    let leima = document.createElement('p');
    leima.innerHTML = f[i].kommenttiAikaleima;

    let teksti = document.createElement('p');
    teksti.innerHTML = f[i].kommenttiTeksti;

    pikkudiv.appendChild(postaaja);
    pikkudiv.appendChild(leima);
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

  const respovkommentti = (testi) => {

    if (testi.status === 'kommentti OK') {
      alert('Kommentin Upload onnistui!');
    }
    else {
      alert('Kommentin Upload epäonnistui!');
    }
  };
};

lomakeKommentti.addEventListener('submit', submitKommentti);