import logoGx from '../../assets/img/icons/logo-gx.png';

const Footer = () => {
  return (
    <footer className='bg-bgprimary '>
      <div className='center  border-t border-solid border-[#5e5e78] mt-10 py-5 px-[0.625rem] flex items-center justify-between s:flex-col'>
        <img src={logoGx} alt='' />

        <p className='text-[#fff] text-xl font-worksans s:text-base s:mt-3'>
          © Guilherme Xavier 2022 all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
