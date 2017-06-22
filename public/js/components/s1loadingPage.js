'use strict';

const S1LoadingPage = () => {
  const containerS1 = $("<div class='container-S1'></div>");
  const yapeLogoS1  = $("<img src='assets/img/icons/yapeWhiteLogo.jpg' class='yape-logoS1'></img>");
  const bcpLogoS1   = $("<img src='assets/img/icons/bcplogo.png' class='bcp-logoS1'></img>");

  containerS1.append(yapeLogoS1);
  containerS1.append(bcpLogoS1);

  return containerS1;
}
