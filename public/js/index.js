'use strict';

const state = {
  current_screen : null
};

const current_user = {
  phone: null,
  terms:null,
  code:null,
	name:null,
	email:null,
	password:null,
	message:null
}

var accountant = 0;

var chronometer = null;

const render = (current_screen) => {
  const root = $('.root');
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (current_screen) {
    case null:
      wrapper.append(Welcome());
      break;
    case "Register_Phone":
      wrapper.append(Register_Phone());
      break;
    case "Resend_Code":
      wrapper.append(Resend_Code());
      if (accountant == 0) {
        chronometer = setInterval(function () {
          accountant ++
          console.log(accountant);
          if (accountant == 21) {
            clearInterval(chronometer);
            console.log("se acabo el tiempo");
            postDATA("api/resendCode", {phone: current_user.phone});
            accountant = 0;
          }
        }, 1000);
      }
      break;
    case "Create_User":
      console.log("estas en create user");
      // wrapper.append(Create_User());
      break;
    default:
      wrapper.append(Welcome());
  }
  root.append(wrapper);
}

$( _ => {
  render(state.current_screen);
});
