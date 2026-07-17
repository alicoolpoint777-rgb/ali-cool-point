"use client";

import * as React from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoPlayer() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);

  React.useEffect(() => {
    // Attempt autoplay on mount
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay was prevented by browser (normal behavior for unmuted autoplay)
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl group">
      {/* Video Element */}
      <video
        ref={videoRef}
        src="/videos/intro.mp4"
        loop
        muted={isMuted}
        playsInline
        className="h-full w-full object-cover"
        onClick={togglePlay}
      />

      {/* Glassmorphic Play Overlay (Shown only when paused) */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-slate-950/40 cursor-pointer backdrop-blur-[2px]"
          onClick={togglePlay}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 border border-white/30 text-white backdrop-blur-md shadow-lg transition-transform duration-200 hover:scale-110">
            <Play className="h-8 w-8 fill-white ml-1" />
          </div>
        </div>
      )}

      {/* Control Bar (Fades in on hover) */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end justify-between px-4 pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex items-center space-x-2">
          {/* Play/Pause Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-white/10"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>

          {/* Mute Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-white/10"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>

        {/* Fullscreen Button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-white hover:bg-white/10"
          onClick={handleFullscreen}
        >
          <Maximize className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
