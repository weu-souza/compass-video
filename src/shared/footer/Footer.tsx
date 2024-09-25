import logo from "../../assets/img/compass-uol.png";

const Footer = () => {

  const linkStyle = "inline-flex text-center text-white caption px-2";
  return (
    <div className="h-min-[331px] bottom-0 bg-gray-950 flex flex-col items-center pb-7 pt-9 px-4">
      <div className='flex items-center justify-center'>
        <img src={logo} alt="Logo" className="w-[200px] h-[68.46px] top-[34px]" />
      </div>
      <div className='w-full flex items-center flex-col gap-[36px] mt-[36px]'>
        <div className="left-[394px] top-[138px] justify-center items-center gap-5 text-center flex-wrap">
          <a className={linkStyle}>Política de privacidad</a>
          <a className={linkStyle}>Acuerdo de suscripción</a>
          <a className={linkStyle}>Ayuda</a>
          <a className={linkStyle}>Dispositivos compatible</a>
          <a className={linkStyle}>Acerca de Disney+</a>
          <a className={linkStyle}>Publicidad personalizada</a>
        </div>
        <div className="w-auto sm:w-[456px] top-[192px] items-center  text-center text-white caption inline-flex">Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. El servicio Disney+ es comercializado por Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.</div>
        <div className="top-[287px] text-center text-white caption">© Disney. Todos los derechos reservados.</div>
      </div>
    </div>
  )
}

export default Footer
