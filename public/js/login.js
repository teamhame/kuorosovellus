'use strict';
const valikko = document.querySelector('#valikko');
const nappi = document.querySelector('#haku');


document.addEventListener('DOMContentLoaded', function() {
  alert("Ready!");
  fetch('./logged').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    respologged(json);
  });
  const respologged = (testi) => {
    if (testi.status === "OK"){
      console.log("ok");
    }else {
      console.log('not ok');
      function timeout(param) {
        console.log(param);
        window.location.replace('HTTPS://10.114.32.171/node/index.html?page='+encodeURIComponent(window.location));
      }
      setTimeout(timeout, 5, 'moi');

    }

  }
}, false);

/*const nappiFunction=()=>{
  console.log('heivaan');
  let haku = document.querySelector('#haku').innerHTML;
  window.location.replace('HTTPS://10.114.32.171/node/uploadhaku.html');

};*/

const lahetaHaku = (evtHaku) => {
  evtHaku.preventDefault();
  const data7 = JSON.stringify([
    loginForm.querySelector('input[name="haku"]').value,
  ]);
  const asetukset = {
    method: 'post',
    body: data7,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  window.location.replace('HTTPS://10.114.32.171/node/uploadhaku.html');
};
  //login.html:n valikon toiminnallisuus
  const menuFunction= () => {
    let x = document.getElementById("valikko");
    if (x.className === "valikko") {
      x.className += " responsive";
    } else {
      x.className = "valikko";
    }
  };
valikko.addEventListener('click', menuFunction);
nappi.addEventListener('submit', lahetaHaku);