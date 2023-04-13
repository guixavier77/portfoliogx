type cardProps = {
  icon: any;
  title: string;
  description: string;
};

const CardCont = ({ icon, title, description }: cardProps) => {
  return (
    <a className='flex justify-center items-center flex-col bg-cardBg p-[1.875rem] font-worksans w-[13.75rem] h-[10.375rem] rounded shadow-md border-solid border-b-4 border-blue cursor-pointer'>
      <img className='w-8 h-8' src={icon} alt='' />
      <h3 className='text-[#ebebeb] py-[0.75rem] font-semibold uppercase'>
        {title}
      </h3>
      <p className='text-textWhite text-sm'>{description}</p>
    </a>
  );
};

export default CardCont;
