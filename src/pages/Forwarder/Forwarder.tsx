import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomVideo } from "../../interfaces/Video";
import Page from "../Page/Page";

function Forwarder() {
  const navigate = useNavigate();
  useEffect(() => {
    const video = getRandomVideo();
    navigate(`/${video}`);
  });

  return <Page></Page>;
}

export default Forwarder;
