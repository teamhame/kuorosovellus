'use strict';
//let hakutulos = null;
const lomakeHaku = document.querySelector('#formHaku');
//const holder = document.querySelector('#holder');
const button = document.querySelector('#like');

/*document.addEventListener('DOMContentLoaded', function() {
  alert('Ready!');
  fetch('./logged').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    respologged(json);
  });
  const respologged = (testi) => {
    if (testi.status === 'OK') {
      console.log('ok');
    } else {
      console.log('not ok');

      function timeout(param) {
        console.log(param);
        window.location.replace('HTTPS://10.114.32.171/node/index.html?page=' +
            encodeURIComponent(window.location));
      }

      setTimeout(timeout, 50, 'moi');

    }

  };
}, false);*/

const lahetaHaku = (evtHaku) => {
  evtHaku.preventDefault();
  const data7 = JSON.stringify([
    lomakeHaku.querySelector('input[name="haku"]').value,
  ]);
  const asetukset = {
    method: 'post',
    body: data7,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  fetch('./uploadhaku', asetukset).then((response) => {
    return response.json();
  }).then((kuvat) => {
    const holder = document.querySelector('#holder');
    console.log('haku upload ', kuvat);

    try {
      holder.innerHTML = '';
    } catch (err) {
      console.log(err);
    }
    let x = 1;
    for (let item of kuvat) {
      const divK = document.createElement('div');
      const img = document.createElement('img');
      const h = document.createElement('header');
      const p = document.createElement('p');

      const kuva = item.mediaThumb;
      const nimi = item.mediaNimi;

      img.setAttribute('src', kuva);
      img.addEventListener('click', ()=>{
        // tähän
        document.querySelector('.modal').classList.remove('hidden');
        document.querySelector('.modal img').src = item.mediaUrl;
        document.querySelector('.modal a').href = item.mediaUrl;
        document.querySelector('#x').addEventListener('click', ()=> {
          document.querySelector('.modal').classList.add('hidden');
          document.querySelector('.modal img').src = "";
        });

      });
      h.innerHTML = nimi;
      p.innerHTML = 'tykkäykset';
      divK.setAttribute('id', 'divKid' + x);

      holder.appendChild(divK);
      divK.appendChild(h);
      divK.appendChild(img);
      divK.appendChild(p);

      x++;
    }

  });
};

const like = (evtLike) => {
  alert('tykkäsit tästä');

};

button.addEventListener('click', like);
lomakeHaku.addEventListener('submit', lahetaHaku);

