type cardProps = {
  src: any;
};

const CardTec = ({ src }: cardProps) => {
  return (
    <div className=' p-3 flex justify-center items-center bg-cardBg h-24 w-24 cursor-pointer rounded-md'>
      <img src={src} />
    </div>
  );
};

export default CardTec;
