

type elementos = {
classChildren:string
className:string
handleActive:() => void;
active:boolean;
}

const ButtonClicked = ( {classChildren,className,handleActive,active}: elementos ) => {
  return (
    <button className={active?`hover:bg-opacity-black-60 ${className}`:`hover:bg-white ${className}` } onClick={handleActive}>
      <i onClick={handleActive} className={active?"fa-solid fa-check fa-lg text-secondary":classChildren}></i>
    </button>
  )
}

export default ButtonClicked
