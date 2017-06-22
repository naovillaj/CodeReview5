const postDATA = (url, data) => {
  switch (url) {
    case "api/registerNumber":
      $.post(url, data, function (response){
        if (response.data !== null) {
          const request_response = response.data;

          current_user.code = request_response.code;
          current_user.phone = request_response.phone;
          current_user.terms = request_response.terms;

          console.log("Código de usuario: " + current_user.code);
          state.current_screen = "Resend_Code";
          render(state.current_screen);
        }else {
          console.log(response.message);
          render(state.current_screen);
        }
      }, "json");
      break;
      case "api/resendCode":
        $.post(url, data, function (response){
          if (response.data !== null) {
            const request_response = response;

            current_user.code = request_response.data;

            console.log(response.message+ ": " + current_user.code);
            state.current_screen = "Resend_Code";
            render(state.current_screen);
          }else {
            console.log("Error en la actualización de código");
            render(state.current_screen);
          }
        }, "json");
        break;
    default:
      console.log("No se especifico endpoint");
    }

}
