import { ReactNode } from 'react';
interface SectionTitleProps {
  title: string | ReactNode;
}
const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h1
      data-aos='fade-right'
      className='font-montserrat font-bold text-5xl uppercase text-[#ffff] text-center after:w-40 after:h-1  after:mx-auto after:bg-blue after:block'
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
