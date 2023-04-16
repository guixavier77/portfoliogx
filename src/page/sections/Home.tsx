import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import fotoHome from '../../assets/img/foto-header.png';
const Home = () => {
  return (
    <section className=' bg-bgprimary'>
      <div className='center grid grid-cols-2 pb-16 txt s:grid-cols-1'>
        <div className='pt-20 s:pt-5 '>
          <h2 className='text-[#9b9bb1] font-normal text-4xl font-montserrat d:text-5xl '>
            I'm,
          </h2>
          <h1 className='text-[#ffff] font-montserrat text-5xl font-bold pb-6 after:block after:w-48  after:border-solid after:border-2 after:border-blue '>
            Guilherme
          </h1>
          <p className='font-worksans text-textWhite font-normal text-lg pb-14 t:text-base'>
            Estudante de Análise e desenvolvimento de sistemas na instituição
            IFNMG, com foco de estudo em desenvolvimento web busco aprimorar
            minhas habilidades aplicando-as em projetos pessoais, utilizando
            tecnologias como React, Node, MongoDB.
          </p>

          <a
            href=''
            className='inline-block border-2 border-solid rounded-full py-5 px-8 border-blue text-blue text-lg items-center t:py-[10px] t:px-[16px] hover:border-[#ebebeb] hover:text-[#ebebeb]  hover:duration-1000'
          >
            <span className='flex gap-2 items-center '>
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </span>
          </a>
        </div>

        <div className='flex justify-end pt-10 '>
          <img
            src={fotoHome}
            alt=''
            className='t:w-[400px] t:h-[430px] t:pt-[30px]'
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
