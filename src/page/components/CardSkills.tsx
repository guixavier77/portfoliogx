type cardProps = {
  icon: any;
  title: string;
  description: string;
};

const LogoItem = ({ icon, title, description }: cardProps) => {
  return (
    <div className='w-80 h-80 bg-cardBg rounded shadow-2xl py-8 px-5'>
      <div className='bg-bgprimary w-16 h-16 rounded-full flex justify-center items-center'>
        <img src={icon} />
      </div>
      <h3 className='text-[#ffff] font-montserrat font-semibold text-2xl pt-5 pb-3'>
        {title}
      </h3>
      <p className='font-worksans text-lg text-textWhite'>{description}</p>
    </div>
  );
};

export default LogoItem;
