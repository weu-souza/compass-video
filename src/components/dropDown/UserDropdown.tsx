import React, { useRef, useEffect } from 'react';
import image1 from '../../assets/icons/Ellipse 8.svg';
import image2 from '../../assets/icons/Ellipse 9.svg';

type UserDropdownProps = {
   isOpen: boolean;
   toggleDropdown: () => void;
   closeDropdown: () => void;
};

const UserDropdown: React.FC<UserDropdownProps> = ({ isOpen, toggleDropdown, closeDropdown }) => {
   const dropdownRef = useRef<HTMLDivElement>(null);
const Loggout = () =>{
   window.localStorage.clear();
   window.location.href = 'http://localhost:5173';
}
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            closeDropdown();
         }
      };

      if (isOpen) {
         document.addEventListener('mousedown', handleClickOutside);
      } else {
         document.removeEventListener('mousedown', handleClickOutside);
      }

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [isOpen, closeDropdown]);

   const style = {
      TextUser: "text-white opacity-80 font-normal body-review",
      TextSettings: "text-start text-white body-review font-medium px-1 py-2 w-full hover:bg-neutral-600",
      ButtonUser: "left-[20px] top-[20px] justify-start items-center gap-4 inline-flex py-2 w-full hover:bg-neutral-600 rounded-md",
      arrow: "absolute top-0 right-4 w-0 h-2 border-l-8 border-r-8 border-b-[15px] border-transparent border-b-neutral-700 z-20"
   }

   return (
      <div ref={dropdownRef} className="relative">
         <button className="w-12 h-12 rounded-full" onClick={toggleDropdown}>
            <img className="w-12 h-12 rounded-full border-2 border-cyan-400" src={image2} alt="user" />
         </button>
         {isOpen && (
            <div className="relative">
               <div className={style.arrow}></div>
               <div className="absolute -right-1 mt-3 w-[248px] h-[474px] bg-neutral-700 border border-gray-200 rounded-lg shadow-lg p-5 z-10">
                  <button className={style.ButtonUser}>
                     <img className="w-12 h-12 rounded-full border-2 " src={image1} alt="user" />
                     <div className={style.TextUser}>Leslie Alexander</div>
                  </button>
                  <button className={style.ButtonUser}>
                     <img className="w-12 h-12 rounded-full border-2 " src={image2} alt="user" />
                     <div className={style.TextUser}>Ronald Richards</div>
                  </button>
                  <button className={style.ButtonUser}>
                     <i className="fa-solid fa-plus text-white w-12 h-12 rounded-full bg-neutral-500 flex items-center justify-center"></i>
                     <div className={style.TextUser}>Criar perfil</div>
                  </button>
                  <div className="left-[20px] top-[220px] flex-col justify-between items-start inline-flex w-full mt-2">
                     <button className={style.TextSettings}>Editar perfil</button>
                     <button className={style.TextSettings}>Preferências</button>
                     <button className="text-start text-blue-400 button-text font-medium px-1 py-2 w-full hover:bg-neutral-600 rounded-md">Minha assinatura</button>
                     <button className={style.TextSettings}>Minha conta</button>
                     <button className={style.TextSettings}>Ajuda</button>
                     <button className={style.TextSettings} onClick={Loggout}>Sair</button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default UserDropdown;
