import websitesIcon from '../../assets/img/icons/coding.svg';
import CardSkill from '../components/CardSkills';
import CardTec from '../components/CardTech';
import jsLogo from '../../assets/img/icons/javascript.svg';
import tsLogo from '../../assets/img/icons/typescript.svg';
import reactLogo from '../../assets/img/icons/react.svg';
import tailwindLogo from '../../assets/img/icons/tailwind-css-2.svg';
import nodeLogo from '../../assets/img/icons/node.svg';
import mongoLogo from '../../assets/img/icons/mongodb.svg';
import SectionTitle from '../components/SectionTitle';
const Skills = () => {
  return (
    <section className='bg-bgsecondary spaceSection' id='Skills'>
      <div className='center'>
        <SectionTitle title={'<Skills>'} />
        <div
          className='flex pt-16 gap-8 flex-wrap justify-center '
          data-aos='fade-down'
        >
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

        <div
          className='flex flex-wrap justify-center pt-10 gap-12 t:grid  t:justify-items-center cardTec  '
          data-aos='fade-right'
        >
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
