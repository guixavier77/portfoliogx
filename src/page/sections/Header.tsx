import React from 'react';
import logoGx from '../../assets/img/icons/logo-gx.png';
import logoLinkedin from '../../assets/img/icons/linkedin.svg';
import logoGithub from '../../assets/img/icons/github.svg';
import logoEmail from '../../assets/img/icons/email.svg';
import logoTelefone from '../../assets/img/icons/telefone.svg';
import MenuOption from '../components/MenuOption';
import LogoList from '../components/LogoList';

const Header = () => {
  const [active, setMode] = React.useState(false);

  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <div
      className={`center flex py-5 justify-between items-center flex-wrap text-lg ${
        active ? 's:mb-[330px]' : ''
      }`}
    >
      <a href=''>
        {' '}
        <img src={logoGx} alt='' />
      </a>

      <nav className=''>
        <div
          className='cursor-pointer p-3 hidden  s:block'
          onClick={ToggleMode}
        >
          <div className={`hamburguer ${active ? 'hamburguer-1' : ''}`}></div>
          <div className={`hamburguer ${active ? 'hamburguer-2' : ''}`}></div>
          <div className={`hamburguer ${active ? 'hamburguer-3' : ''}`}></div>
        </div>
        <ul
          className={`flex font-light gap-8 flex-wrap  s:menuMobile s:gap-0 s:${
            active ? 'block animate-show-down ' : 'hidden'
          }`}
        >
          <MenuOption title='Home' />
          <MenuOption title='Skills' />
          <MenuOption title='Projetos' />
          <MenuOption title='Contatos' />
        </ul>
      </nav>
      <div className='flex flex-wrap gap-8 s:hidden '>
        <LogoList
          href='https://www.linkedin.com/in/guixavier77/'
          src={logoLinkedin}
          alt='logo linkedin'
        />
        <LogoList
          href='https://github.com/guixavier77'
          src={logoGithub}
          alt='logo github'
        />
        <LogoList
          href='mailto:xguilherme1@gmail.com'
          src={logoEmail}
          alt='icone email'
        />
        <LogoList
          href='tel:+5533998364168'
          src={logoTelefone}
          alt='icone telefone'
        />
      </div>
    </div>
  );
};

export default Header;
