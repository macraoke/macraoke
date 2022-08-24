import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { getRandomVideo, Videos } from "../../interfaces/Video";
import Page from "../Page/Page";

function Player() {
  let params = useParams();
  let video: string | undefined = params.video;

  if (!Videos.some((v) => v.id === params.video)) {
    video = getRandomVideo();
  }

  return (
    <Page>
      <div className="player">
        <VideoPlayer videoId={video!} />
      </div>
    </Page>
  );
}

export default Player;
