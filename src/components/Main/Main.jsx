import React from 'react';

import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

const Main = () => {
  return (
    <div>
      <p>Main</p> - компонент страницы «О проекте». Он будет содержать только презентационные компоненты и в будущем, за исключением шапки навигации. Вот так выглядит список компонентов, которые будут использоваться только на этой странице:
      <Promo></Promo>
      <NavTab></NavTab>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </div>
  );
}

export default Main;