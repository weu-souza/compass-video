import { FunctionComponent, useState, useEffect } from "react";

type FunctionComponentProps = {
  titleMovie?: string;
};

const PlayerHeader: FunctionComponent<FunctionComponentProps> = ({
  titleMovie = "Teaser",
}) => {
  const [backClicked, setBackClicked] = useState(false);

  useEffect(() => {
    if (backClicked) {
      window.location.href = "/home";
    }
  }, [backClicked]);

  const handleBackClick = () => {
    setBackClicked(true);
  };

  return (
    <div className="w-full [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0))] max-w-full h-40 text-left text-3xl text-white font-lato">
      <div className="absolute top-8 left-6 flex flex-row items-center justify-start gap-6">
        <img
          className="w-12 h-12 overflow-hidden shrink-0 cursor-pointer"
          alt=""
          src="/iconarrow-back-ios.svg"
          onClick={handleBackClick}
        />
        <div className="flex flex-col items-start justify-start gap-2">
          <b className="relative">{titleMovie}</b>
          <div className="relative text-lg text-gray-100"></div>
        </div>
      </div>
    </div>
  );  
};

export default PlayerHeader;