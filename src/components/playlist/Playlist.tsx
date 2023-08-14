import "./playlist.css";
import { YoutubeLogo } from "@phosphor-icons/react";

const Playlist = () => {
  return (
    <div className="playlist" id="playlist">
      <div className="flex items-center justify-center">
        <YoutubeLogo size={32} className="youtube" />
        <h2>Playlist do Youtube</h2>
        <YoutubeLogo size={32} className="youtube" />
      </div>
    </div>
  );
};

export default Playlist;
