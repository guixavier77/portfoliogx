type MenuListProps = {
  title: string;
};

const MenuList = ({ title }: MenuListProps) => {
  return (
    <li className=''>
      <a
        href={`#${title}`}
        className='block text-textWhite font-worksans relative px-2.5  text-lg menuEffect s:text-center s:mt-5 s:text-2xl s:py-4 '
      >
        {title}
      </a>
    </li>
  );
};

export default MenuList;
