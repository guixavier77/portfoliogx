import React from 'react';
import websitesIcon from '../../assets/img/icons/coding.svg';
import CardSkill from '../components/CardSkills';
import CardTec from '../components/CardTech';
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
          <CardSkill
            icon={websitesIcon}
            title='WEBSITES'
            description='Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.'
          />

          <CardSkill
            icon={websitesIcon}
            title='WEBSITES'
            description='Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.'
          />

          <CardSkill
            icon={websitesIcon}
            title='WEBSITES'
            description='Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.'
          />
        </div>

        <div className='flex flex-wrap justify-center pt-10 gap-12 t:grid  t:justify-items-center cardTec '>
          <CardTec src={jsLogo} tecName='JavaScript' />
          <CardTec src={tsLogo} tecName='TypeScript' />
          <CardTec src={reactLogo} tecName='React' />
          <CardTec src={tailwindLogo} tecName='TailwindCSS' />
          <CardTec src={nodeLogo} tecName='Node' />
          <CardTec src={mongoLogo} tecName='MongoDB' />
        </div>
      </div>
    </section>
  );
};

export default Skills;
