'use strict';

const lomakeVideoHaku = document.querySelector('#formVideoHaku');
const videoholder = document.querySelector('#showVideo');

const lahetaVideoHaku = (evtVideoHaku) => {
      evtVideoHaku.preventDefault();
      const data8 = JSON.stringify([
        lomakeVideoHaku.querySelector('input[name="haku"]').value,
      ]);
      const asetukset = {
        method: 'post',
        body: data8,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      };

      fetch('./uploadhaku', asetukset).then((response) => {
        return response.json();
      }).then((videot) => {
        hakutulos = videot;
        console.log('haku upload ', hakutulos);
      });
      try {
        videoholder.innerHTML = '';
      } catch (err) {
        console.log(err);
      }
      for (let item of videot) {
        const divK = document.createElement('div');
        const img = document.createElement('img');
        const h = document.createElement('header');
        const kuva = item.mediaThumb;
        const nimi = item.meadiaNimi;

        img.innerHTML = kuva;
        h.innerHTML = nimi;

        holder.appendChild(divK);
        divK.appendChild(h);
        divK.appendChild(img);

      }
    };

lomakeVideoHaku.addEventListener('submit', lahetaVideoHaku);