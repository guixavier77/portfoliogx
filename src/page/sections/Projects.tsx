import CardProj from '../components/CardProjects';
import portfolioimg from '../../assets/img/projetos/proj-portfolio.png';
import uploadImg from '../../assets/img/projetos/proj-upload.png';
import gxSystems from '../../assets/img/projetos/proj-gxsystem.jpg';
import SectionTitle from '../components/SectionTitle';

const Projects = () => {
  return (
    <section className='bg-bgprimary spaceSection  ' id='Projetos'>
      <div className='center px-0'>
        <SectionTitle title={'<Projetos>'} />

        <div
          className='flex overflow-hidden  gap-[20px] justify-center flex-wrap'
          data-aos='fade-down'
        >
          {/* PORTFOLIO */}
          <CardProj
            imgProj={portfolioimg}
            titleProj='Portfolio'
            description='Meu portfolio onde apresento um pouco sobre mim.'
            href='https://guixavier77.github.io/gxsystem-landing/'
            github='https://github.com/guixavier77/gxsystem-landing'
          ></CardProj>

          {/* UPLOAD DE IMAGENS */}
          <CardProj
            imgProj={uploadImg}
            titleProj='Upload de Imagens'
            description='Projeto de um site de upload de imagens'
            href='https://github.com/guixavier77'
            github='https://github.com/guixavier77/upload-imagens'
          ></CardProj>

          {/* GX SYSTEMS */}
          <CardProj
            imgProj={gxSystems}
            titleProj='gx systems'
            description='Projeto fictício de uma empresa do ramo de desenvolvimento de software'
            href='https://guixavier77.github.io/gxsystem-landing/'
            github='https://github.com/guixavier77/gxsystem-landing'
          ></CardProj>
        </div>
      </div>
    </section>
  );
};

export default Projects;
