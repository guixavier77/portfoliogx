type cardProps = {
  imgProj: any;
  titleProj: string;
  description: string;
  href: string;
  github: string;
};

const CardProj = ({
  imgProj,
  titleProj,
  description,
  href,
  github,
}: cardProps) => {
  return (
    <div className='flex flex-col flex-shrink-0 py-8 px-11 w-[31.25rem] h-[31rem] bg-bgsecondary shadow-2xl rounded-lg  select-none s:w-[21.81rem] s:h-[26.56rem]'>
      <img src={imgProj} alt='' />
      <h3 className='font-montserrat text-[#ebebeb] text-start py-5 uppercase font-semibold text-xl'>
        {titleProj}
      </h3>
      <p className='font-worksans text-textWhite text-lg pb-5 h-28'>
        {description}
      </p>
      <div className='flex gap-6'>
        <a
          className='btn  bg-blue border-solid border-blue border-2'
          href={href}
        >
          Demo
        </a>
        <a
          className='btn border-blue border-2 border-solid text-[#ffff]'
          href={github}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default CardProj;
