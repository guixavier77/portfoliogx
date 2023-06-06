type LogoListProps = {
  href: string
  src: any
  alt: string
}

const LogoList = ({ href, src, alt }: LogoListProps) => {
  return (
    <a
      href={href}
      className="bg-[#48485b] w-9 h-9 flex justify-center items-center rounded-full"
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="ease-in-out duration-500 hover:scale-125 "
        src={src}
        alt={alt}
      />
    </a>
  )
}
export default LogoList
