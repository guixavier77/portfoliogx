import React from 'react'

type cardProps = {
  src: any
  tecName: string
}

const CardTec = ({ src, tecName }: cardProps) => {
  const refTec = React.useRef<HTMLDivElement>(null)
  // const showMessage = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   refTec.current!.style.visibility = '';
  //   refTec.current!.style.display = 'flex';
  // };

  // const hiddenMessage = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   refTec.current!.style.visibility = 'hidden';
  // };

  return (
    <div /* onMouseOver={showMessage} onMouseLeave={hiddenMessage} */>
      <a className="bg-bgprimary shadow-card p-3 flex justify-center items-center bg-cardBg h-24 w-24 cursor-pointer rounded-md ">
        <img src={src} alt="card tecnologias" />
      </a>

      <div
        ref={refTec}
        className="flex w-24 h-6 bg-blue mt-2 rounded-md text-cardBg  items-center justify-center  font-bold p-1 text-sm  "
      >
        <p>{tecName}</p>
      </div>
    </div>
  )
}

export default CardTec
