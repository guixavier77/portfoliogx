import { Link } from 'react-scroll';

type MenuListProps = {
  title: string;
};

const MenuList = ({ title }: MenuListProps) => {
  return (
    <li className='cursor-pointer'>
      <Link
        to={title}
        spy={true}
        offset={-100}
        smooth={true}
        duration={500}
        className='block text-textWhite font-worksans relative px-2.5  text-lg menuEffect s:text-center s:mt-5 s:text-2xl s:py-4 '
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuList;
