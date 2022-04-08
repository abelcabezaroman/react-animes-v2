import { useEffect } from "react";
import { useRef } from "react";

export default function BackgroundPlayer() {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.volume = 0.01;
    // audioRef.current.play();
    console.log(audioRef.current.paused)
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="background-sound.mp3" />
      <button className={"b-btn"} onClick={() => audioRef.current.play()}>
        Play
      </button>
      <button className="b-btn" onClick={() => audioRef.current.pause()}>
        Pause
      </button>
    </div>
  );
}
