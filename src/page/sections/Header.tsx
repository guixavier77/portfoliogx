import React from 'react';
import logoGx from '../../assets/img/icons/logo-gx.png';
import logoLinkedin from '../../assets/img/icons/linkedin.svg';
import logoGithub from '../../assets/img/icons/github.svg';
import logoEmail from '../../assets/img/icons/email.svg';
import logoTelefone from '../../assets/img/icons/telefone.svg';

type MenuItemProps = {
  title: string;
};

const MenuItem = ({ title }: MenuItemProps) => {
  return (
    <li className='  '>
      <a
        href=''
        className='block text-textWhite font-worksans relative px-2.5  text-lg menuEffect'
      >
        {title}
      </a>
    </li>
  );
};

type LogoItemProps = {
  href: string;
  src: any;
  alt: string;
};

const LogoItem = ({ href, src, alt }: LogoItemProps) => {
  return (
    <a
      href={href}
      className='bg-[#48485b] w-9 h-9 flex justify-center items-center rounded-full '
    >
      <img
        className='ease-in-out duration-500 hover:scale-125'
        src={src}
        alt={alt}
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className='center flex py-5 justify-between items-center flex-wrap text-lg'>
      <a href=''>
        {' '}
        <img src={logoGx} alt='' />
      </a>

      <nav>
        <ul className='flex font-light gap-8 flex-wrap s:hidden '>
          <MenuItem title='Home' />
          <MenuItem title='Skills' />
          <MenuItem title='Projetos' />
          <MenuItem title='Contatos' />
        </ul>
      </nav>
      <div className='flex flex-wrap gap-8 s:hidden '>
        <LogoItem
          href='https://www.linkedin.com/in/guixavier77/'
          src={logoLinkedin}
          alt='logo linkedin'
        />
        <LogoItem
          href='https://github.com/guixavier77'
          src={logoGithub}
          alt='logo github'
        />
        <LogoItem
          href='mailto:xguilherme1@gmail.com'
          src={logoEmail}
          alt='icone email'
        />
        <LogoItem
          href='tel:+5533998364168'
          src={logoTelefone}
          alt='icone telefone'
        />
      </div>
    </div>
  );
};

export default Header;
