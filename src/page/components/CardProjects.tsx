type cardProps = {
  imgProj: any
  titleProj: string
  description: string
  href: string
  github: string
}

const CardProj = ({
  imgProj,
  titleProj,
  description,
  href,
  github,
}: cardProps) => {
  return (
    <div className="flex flex-col flex-shrink-0 py-8 px-10 w-[360px] h-[400px] bg-bgsecondary shadow-card rounded-lg  select-none s:w-[21.81rem] s:h-[26.56rem]  ease-in-out duration-500 cursor-pointer mt-16 hover:-translate-y-7 hover:border-blue hover:border-b-2 ">
      <img
        className="h-[166px]"
        src={imgProj}
        alt="foto projeto desenvolvido"
      />
      <h3 className="font-montserrat text-[#ebebeb] text-start py-2 uppercase font-semibold text-lg ">
        {titleProj}
      </h3>
      <div className="flex "></div>
      <p className="font-worksans text-textWhite text-base py-3 h-28">
        {description}
      </p>
      <div className="flex gap-6">
        <a
          className="btn  bg-blue border-solid border-blue border-[1px] transition-all duration-1000 ease-out hover:bg-[transparent] hover:text-[#fff]"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          className="btn border-blue border-[1px] border-solid text-[#ffff] transition-all duration-1000 ease-out hover:bg-blue hover:text-[#0e091b]"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default CardProj
