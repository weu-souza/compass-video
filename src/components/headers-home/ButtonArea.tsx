import { useNavigate } from "react-router-dom";
import WatchList from "../Buttons/WatchList";
import Favorite from "../Buttons/Favorite";
type btn = {
  data: string | undefined;
  seccondButton: string;
  icon: boolean;
  watchMediaId:number|undefined;
  WatchmediaType:string

};

const ButtonArea = ({ data, seccondButton, icon, watchMediaId,WatchmediaType }: btn) => {
  const navigate = useNavigate();
  const redirect = () => {
    if (data) {
      navigate(`/player?title=trailer ${data}`);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-6  grid-cols-2">
        <button
          onClick={redirect}
          className="  col-span-2 button-text rounded-sm px-6 py-2 bg-white hover:bg-opacity-40 gap-3 flex items-center text-center"
        >
          <i className="fa-solid fa-play"></i>
          {"VER AGORA "}
        </button>

        <button className="button-text col-span-2    border  border-white rounded-sm px-6 py-2 text-white flex items-center gap-3 hover:bg-opacity-white-10 bg-opacity-black-10 ">
          {icon && <i className="fa-solid fa-circle-info  "></i>}
          {seccondButton}
        </button>

        <div className="flex gap-6">
          <WatchList  media_id={watchMediaId} media_type={WatchmediaType}/>
          <Favorite media_id={watchMediaId} media_type={WatchmediaType}/>
        </div>
      </div>
    </div>
  );
};

export default ButtonArea;
