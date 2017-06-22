// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel({
//     margin:10,
//     loop:true,
//     responsive:{
//         0:{
//             items:1}
//         },
//   })
// });

const Slide = () => {

  const divImg = $("<div class='text-center owl-carousel owl-theme'></div>");
  const img1 = $("<div class= 'slide item' style='width:100%'><img src='assets/img/icons/icon-people.png'><h2> Paga a tus amigos</h2><h4>Paga a quien quieras desde donde quieras, sin usar efectivo.</h4></div>");
  const img2 = $("<div class= 'slide item' style='width:100%'><img src='assets/img/icons/happy-person.png'><h2> Sin número de cuenta</h2><h4>Elige a quién pagar desde tu lista de contactos.</h4></div>");
  const img3 = $("<div class= 'slide item' style='width:100%'><img src='assets/img/icons/group-people.png'><h2> Gratis y Seguro</h2><h4>La transferencia es inmediata y gratuita de una cuenta a otra.</h4></div>");
  

  divImg.append(img1);
  divImg.append(img2);
  divImg.append(img3);

  // const slide_container = $("<div class='slide-container owl-carousel owl-theme'></div>");
  // const slide = $("<div class='slide item'><div class='picture-container text-center'></div></div>");
  
  // const picture = $("<img alt='picture'>");

  
  // slide_container.append(slide);
  

  // slide.append($('.slide-container').attr("src", texts.img[0]));
  // slide.append(Title(texts.titles[0]));
  // slide.append(Instructions(texts.messages[0]));

  // slide.append($('.slide-container').attr("src", texts.img[1]));
  // slide.append(Title(texts.titles[1]));
  // slide.append(Instructions(texts.messages[1]));

  // slide.append($('.slide-container').attr("src", texts.img[2]));
  // slide.append(Title(texts.titles[2]));
  // slide.append(Instructions(texts.messages[2]));
  

  
  // slide_container.append(Slide_buttons());

  return divImg;
}


// var slider = (title, mensaje, imagen) =>{

// }

// const Slide_buttons = () => {
//   const slide_buttons = $("<div class='slide-buttons text-center'></div>");
//   const btn_1 = $("<span class='btn-slide bg-redBullet'></span>");
//   const btn_2 = $("<span class='btn-slide bg-gray'></span>");
//   const btn_3 = $("<span class='btn-slide bg-gray'></span>");

//   slide_buttons.append(btn_1);
//   slide_buttons.append(btn_2);
//   slide_buttons.append(btn_3);

//   return slide_buttons;
// }
