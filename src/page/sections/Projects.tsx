import CardProj from '../components/CardProj';
import gxSystems from '../../assets/img/proj-gxsystem.jpg';

const Projects = () => {
  return (
    <section className='bg-bgprimary spaceSection'>
      <div className='center'>
        <h1 className='title-section '>{'<Projetos>'}</h1>

        <div className='flex overflow-hidden mt-16 gap-2 justify-center'>
          <CardProj
            imgProj={gxSystems}
            titleProj='gx systems'
            description='Projeto fictício de uma empresa do ramo de desenvolvimento de software'
            href='https://guixavier77.github.io/gxsystem-landing/'
            github='https://github.com/guixavier77/gxsystem-landing'
          ></CardProj>

          <CardProj
            imgProj={gxSystems}
            titleProj='gx systems'
            description='Projeto fictício de uma empresa do ramo de desenvolvimento de software'
            href='https://guixavier77.github.io/gxsystem-landing/'
            github='https://github.com/guixavier77/gxsystem-landing'
          ></CardProj>

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
