import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import fotoHome from '../../assets/img/foto-header.png'
import Typewriter from '../components/Typewriter'

const Home = () => {
  return (
    <section data-aos="fade-down" className=" bg-bgprimary " id="Home">
      <div className="center grid grid-cols-2 pb-16 txt s:grid-cols-1">
        <div className="pt-20 s:pt-5 ">
          <h2 className="text-[#9b9bb1] font-normal font-montserrat text-base pb-1">
            <Typewriter text="Olá meu nome é" hideCursor />
          </h2>
          <h1 className="text-[#ffff] font-montserrat text-5xl font-bold pb-6 after:block after:w-48  after:border-solid after:border-2 after:border-blue ">
            <Typewriter text="Guilherme" delay={1500} />
          </h1>
          <p className="font-worksans text-textWhite font-normal text-lg pb-14 t:text-base">
            Estudante de Análise e desenvolvimento de sistemas pelo IFNMG -
            Campus Araçuaí. Sempre em busca de aprendizado e de novos desafios,
            sou um entusiasta da tecnologia onde busco me aperfeiçoar como
            Desenvolvedor Front-end. Em meus projetos pessoais, venho utilizando
            tecnologias como React, TypeScript, Next, TailwindCSS.
          </p>

          <a
            href="/public/pdf/CURRÍCULO23.pdf"
            download
            className="inline-block btn bg-blue py-2 px-8 border-blue text-bgsecondary text-lg items-center t:py-[10px] t:px-[16px] "
          >
            <span className="flex gap-2 items-center ">
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </span>
          </a>
        </div>

        <div className="flex justify-end pt-10 ">
          <img
            src={fotoHome}
            alt="foto de guilherme xavier"
            className="t:w-[400px] t:h-[430px] t:pt-[30px] animate-animated-image relative "
          />
        </div>
      </div>
    </section>
  )
}

export default Home
