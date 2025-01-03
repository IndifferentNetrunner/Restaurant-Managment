import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Замовте улюблену їжу тут
        </h2> 
        <p> Обирайте з різноманітного меню, яке містить 
          вишуканий асортимент страв, приготованих з найкращих 
          інгредієнтів та кулінарної майстерності. Наша місія - 
          задовольнити ваші гастрономічні бажання та підняти ваш 
          досвід харчування на новий рівень, одну смачну страву за раз. 
        </p> 
        <button>Переглянути меню</button>
      </div>
    </div>
  );
};

export default Header;
