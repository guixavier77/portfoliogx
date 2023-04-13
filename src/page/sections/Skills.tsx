import websitesIcon from '../../assets/img/icons/coding.svg';
import LogoItem from '../components/CardSkills';
import CardTec from '../components/CardTec';

import jsLogo from '../../assets/img/icons/javascript.svg';
import tsLogo from '../../assets/img/icons/typescript.svg';
import reactLogo from '../../assets/img/icons/react.svg';
import tailwindLogo from '../../assets/img/icons/tailwind-css-2.svg';
import nodeLogo from '../../assets/img/icons/node.svg';
import mongoLogo from '../../assets/img/icons/mongodb.svg';
const Skills = () => {
  return (
    <section className='bg-bgsecondary spaceSection'>
      <div className='center'>
        <h1 className='title-section '>{'<Skills>'}</h1>
        <div className='flex pt-16 gap-8 flex-wrap justify-center'>
          <LogoItem
            icon={websitesIcon}
            title='WEBSITES'
            description='Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.'
          />

          <LogoItem
            icon={websitesIcon}
            title='WEBSITES'
            description='Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.'
          />

          <LogoItem
            icon={websitesIcon}
            title='WEBSITES'
            description='Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.'
          />
        </div>

        <div className='flex flex-wrap justify-center pt-10 gap-12 t:grid t:gap-[30px] t:justify-items-center cardTec'>
          <CardTec src={jsLogo} />
          <CardTec src={tsLogo} />
          <CardTec src={reactLogo} />
          <CardTec src={tailwindLogo} />
          <CardTec src={nodeLogo} />
          <CardTec src={mongoLogo} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
