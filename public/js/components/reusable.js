const texts = {
  titles :        ["Paga a tus amigos", "Sin número de cuenta", "Gratis y Seguro"],
  messages :      ["Paga a quien quieras desde donde quieras, sin usar efectivo", "Elige a quién pagar desde tu lista de contactos.", "La transferencia es inmediata y gratuita de una cuenta a otra"],
  img:            ["assets/img/icons/icon-people.png", "assets/img/icons/happy-person.png", "assets/img/icons/group-people.png"],
  subtitles :     ["Para comenzar validaremos tu número","Ahora ingresa tu código"],
  instructions :  ["Recibirás un SMS con un código de validación",
                   "Enviamos un SMS con el código de validación al número "],
  recommendations:["Reintentar en"]
};

const Title = (text_title) => {
  const title = $("<div class='title'></div>");
  const text = $("<h2 class='text-center'>" + text_title + "</h2>");

  title.append(text);

  return title;
}

const Subtitle = (text_subtitle) => {
  const subtitle = $("<div class='subtitle'></div>");
  const text = $("<h4 class='text-center'>" + text_subtitle + "</h4>");

  subtitle.append(text);

  return subtitle;
}

const Instructions = (text_paragraph) => {
  const instructions = $("<div class='instructions'></div>");
  const paragraph = $("<p class='text-center'>" + text_paragraph + "</p>");

  instructions.append(paragraph);

  return instructions;
}

const Recommendations = (text_paragraph) => {
  const recommendations = $("<div class='recommendations'></div>");
  const paragraph = $("<p class='text-center text-gray'>" + text_paragraph + "</p>");

  recommendations.append(paragraph);

  return recommendations;
}

const Icon = (dinamic_url) => {
  const static_url = "assets/img/icons/" + dinamic_url;
  const icon_container = $("<div class='icon-container text-center'></div>");
  const icon = $("<img src=" + static_url + " alt=''>");

  icon_container.append(icon);

  return icon_container;
}

const Confirm_btn = (text, callback) => {
  const btn_container = $("<div class='btn-container text-center'></div>");
  const btn_confirm = $("<button disabled type='button' class='btn-confirm text-white'>" + text + "</button>");

  btn_confirm.on("click", callback);
  btn_container.append(btn_confirm);

  return btn_container;
}

const Input = (dinamic_url, id_input, placeholder) => {
  const static_url = "assets/img/icons/" + dinamic_url;
  const input_field = $("<div class='input-field'></div>");
  const icon_container = $("<i class='prefix'></i>");
  const icon = $("<img src=" + static_url + " alt=''>");
  const input = $("<input id=" + id_input + " type='text' class='data text-center' value='' placeholder='" + placeholder + "'>");

  icon_container.append(icon);

  input_field.append(icon_container);
  input_field.append(input);

  return input_field;
}

const Checkbox = () => {
  const checkbox_field = $("<div class='checkbox-field'></div>");
  const checkbox = $("<input id='terms' type='checkbox' class='data'>");
  const label = $("<label for='terms' class='text-gray text-size078'>Acepto los </label>");
  const link = $("<a class='link text-size078' href='#'>términos y condiciones.</<a>");

  label.append(link);

  checkbox_field.append(checkbox);
  checkbox_field.append(label);

  return checkbox_field;
}
