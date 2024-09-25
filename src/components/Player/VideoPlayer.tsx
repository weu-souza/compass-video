import { useEffect, useState } from "react";
import { searchVideosByTitle, VideoItem } from "../../shared/API/Youtube/config";
import { useLocation } from "react-router-dom";
import PlayerHeader from "./PlayerHeader";
import Playercontrols from "./PlayerControls";



// Custom hook to get search params from the URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function VideoPlayer() {
  const [backgroundVideo, setBackgroundVideo] = useState<VideoItem | null>(
    null
  );
  const searchParams = useQuery();
  const title = searchParams.get("title") ?? "";

  useEffect(() => {
    async function fetchBackgroundVideo() {
      const fetchedVideos = await searchVideosByTitle(title);
      if (fetchedVideos.length > 0) setBackgroundVideo(fetchedVideos[0]);
    }
    fetchBackgroundVideo();
  }, [title]);

  return (
    <div className="video-container overflow-hidden h-screen">
      <div className="rotate-mobile">
        {backgroundVideo && (
          <div className="iframe-container md:w-screen ">
            <iframe
              src={`https://www.youtube.com/embed/${backgroundVideo.id}?autoplay=0&mute=0&loop=1&controls=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="h-full md:h-screen "
            ></iframe>
          </div>
        )}
        <div className="z-10">
          <PlayerHeader titleMovie={title} />
          <Playercontrols />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;