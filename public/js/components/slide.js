'use strict';

const Slide = () => {

  const divImg = $("<div class='text-center owl-carousel owl-theme'></div>");
  const img1 = $("<div class= 'slide item' style='width:100%'><img src='assets/img/icons/icon-people.png'><h2> Paga a tus amigos</h2><h4>Paga a quien quieras desde donde quieras, sin usar efectivo.</h4></div>");
  const img2 = $("<div class= 'slide item' style='width:100%'><img src='assets/img/icons/happy-person.png'><h2> Sin número de cuenta</h2><h4>Elige a quién pagar desde tu lista de contactos.</h4></div>");
  const img3 = $("<div class= 'slide item' style='width:100%'><img src='assets/img/icons/group-people.png'><h2> Gratis y Seguro</h2><h4>La transferencia es inmediata y gratuita de una cuenta a otra.</h4></div>");


  divImg.append(img1);
  divImg.append(img2);
  divImg.append(img3);


  return divImg;
}
