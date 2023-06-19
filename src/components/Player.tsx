import { useRef, useState, useEffect } from "react";
import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/outline";
import { useStreamLinkStatus } from "../hooks";
import Loader from "./Loader";

export const Player = () => {
  const {isLoading, isStreamLinkAlive, streamUrl} = useStreamLinkStatus();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);


  useEffect(() => {
    if (!isLoading && isStreamLinkAlive && audioRef.current) {
      playAudio();
    } else {
      pauseAudio();
    }
  }, [isLoading, isStreamLinkAlive])

  function playAudio() {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true)
    }
  }

  function pauseAudio() {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false)
    }
  }


  function renderPlayStopButtons() {
    if (isLoading) return <Loader fullscreen={false} />;
    if (isPlaying)
      return (
        <button onClick={pauseAudio}>
          <PauseCircleIcon className="h-10 w-10 text-orange-500" />
        </button>
      );

    if (!isPlaying)
      return (
        <button onClick={playAudio} className="disabled:opacity-50" disabled={!isStreamLinkAlive}>
          <PlayCircleIcon className="h-10 w-10 text-orange-500" />
        </button>
      );

    return null;
  }

  return (
    <div className="w-full h-16 border-t bg-white fixed z-20 bottom-0 border-gray-200">
      {streamUrl && (
        <audio ref={audioRef} src={streamUrl} className="hidden" autoPlay>
          Your browser does not support the audio element.
        </audio>
      )}
      <div className="flex flex-col justify-center items-center h-full">
        {renderPlayStopButtons()}
      </div>
    </div>
  );
};

export default Player;
