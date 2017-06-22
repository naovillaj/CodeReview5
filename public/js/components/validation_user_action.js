const validations = {
  phone: {
    value: null,
    state: null,
    run_validation: function (value) {
      this.state = (/^9[0-9]{8}$/g).test(value);
      if (this.state) {
        this.value = value;
      }else {
        console.log("Formato de teléfono incorrecto");
      }
    }
  },
  terms: {
    value: null,
    state: null,
    run_validation: function (value) {
      this.state = value;
      if (this.state) {
        this.value = value;
      }else {
        console.log("Términos no aceptados");
      }
    }
  },
  code: {
    value: null,
    state: null,
    run_validation: function (value) {
      console.log(value);
      if (value == current_user.code) {
        this.state = true;
        this.value = value;
        console.log("Código correcto");
      }else {
        console.log("Código incorrecto");
      }
    }
  }
};

const validate_register_phone =  () => {
  const data = $(".user-action .data");
  let correct_data = 0;
  if (validations.phone.state) {
    correct_data ++
    console.log(correct_data);
  }
  if (validations.terms.state) {
    correct_data ++
    console.log(correct_data);
  }

  if (correct_data == data.length) {
    enable_disable_btn($(".btn-confirm"), "enabled");
    return true
  }else {
    enable_disable_btn($(".btn-confirm"), "disabled");
    return false
  }
}

const validate_resend_code =  () => {
  const data = $(".user-action .data");
  let correct_data = 0;
  if (validations.code.state) {
    correct_data ++
    console.log(correct_data);
  }

  if (correct_data == data.length) {
    console.log("Total datos correctos " + correct_data);
    clearInterval(chronometer);
    console.log("se detuvo el cronometro");
    return true
  }else {
    console.log("Total datos incorrectos " + (data.length - correct_data));
    return false
  }
}

const enable_disable_btn = (button, action) => {
  if (action == "enabled") {
    button.prop("disabled", false);
    button.addClass("bg-yellow");
    console.log("botón habilitado");
  }
  if (action == "disabled"){
    button.prop("disabled", true);
    button.removeClass("bg-yellow");
  }
}
