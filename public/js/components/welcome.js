'use strict';

const Welcome = () => {
  const welcome = $("<div class='welcome'></div>");

  welcome.append(Slide());

  const container_confirm_btn = Confirm_btn("registrarme", show_Register_Phone);
  enable_disable_btn(container_confirm_btn.find(".btn-confirm"), "enabled");

  welcome.append(container_confirm_btn);

  return welcome;
}

const show_Register_Phone = () => {
  state.current_screen = "Register_Phone";
  render(state.current_screen);
}
