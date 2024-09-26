import { useLocation } from "react-router-dom";
import PlayerHeader from "./PlayerHeader";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function VideoPlayer() {
  const searchParams = useQuery();
  const title = searchParams.get("title") ?? "";
  return (
    <div className="flex overflow-hidden w-screen h-screen">
            <iframe
              src="/public/loki_trailer.mp4" 
              
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="h-screen w-full"></iframe>
        <div className="z-10">
          <PlayerHeader titleMovie={title} />
        </div>      </div>
  );
}

export default VideoPlayer;