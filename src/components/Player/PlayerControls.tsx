import { FunctionComponent, useState } from "react";


export type PlayercontrolsType = {
  className?: string;
};

const Playercontrols: FunctionComponent<PlayercontrolsType> = () => {
  const [showSubtitles, setShowSubtitles] = useState(false);

  const toggleSubtitles = () => {
    setShowSubtitles(!showSubtitles);
  };

  const handleVolumeToggle = () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"toggleMute","args":""}',
        "*"
      );
    }
  };



  return (
    <div className="[background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)]  w-full h-[158px] absolute bottom-0">

      <div className="absolute bottom-[24px] left-[24px] flex flex-row items-start justify-start gap-[32px]">
        <img
          className="w-[37px] relative h-[37px] overflow-hidden shrink-0"
          alt=""
          src="/iconreplay-10.svg"
        />
        <img
          className="w-[37px] relative h-[37px] overflow-hidden shrink-0"
          alt=""
          src="/iconpause.svg"
        />
        <img
          className="w-[37px] relative h-[37px] overflow-hidden shrink-0"
          alt=""
          src="/iconforward-10.svg"
        />
        <div
          className="flex flex-row items-center justify-start gap-[16px]"
          onClick={handleVolumeToggle} 
          style={{ cursor: "pointer" }}
        >
          <img
            className="w-[37px] relative h-[37px] overflow-hidden shrink-0"
            alt=""
            src="/iconvolume-up.svg"
          />
          <div className="relative">00:00 / 00:00</div>
        </div>
      </div>
      <div className="absolute right-[24px] bottom-[24px] flex flex-row items-center justify-start gap-[32px]">
        <img
          className="w-[37px] relative h-[37px]"
          alt=""
          src="/playerbuttonhelp.svg"
        />
        <img
          className="w-[37px] relative h-[37px]"
          alt=""
          src="/playerbuttonnext.svg"
        />
        <img
          className="w-[37px] relative h-[37px]"
          alt=""
          src="/playerbuttonepisodes.svg"
        />
        <img
          className="w-[37px] relative h-[37px]"
          alt=""
          src="/playerbuttonsubtitles.svg"
          onClick={toggleSubtitles}
          style={{ cursor: "pointer" }}
        />
        <img
          className="w-[37px] relative h-[37px]"
          alt=""
          src="/playerbuttonexpand.svg"
        />
      </div>
    </div>
  );
};

export default Playercontrols;