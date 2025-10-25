import React, { useState, useEffect } from "react";

import { CaptionsControl, FullscreenControl, SoundControl, PipControl } from "./controls/";

import { FaPlay, FaPause } from "react-icons/fa";

import { Button } from "..";

import { VideoControlProps } from "./types";

const toHHMMSS = (secs: number | string | undefined) => {
  const s = secs || 0;
  const sec_num = parseInt(String(s), 10);
  const hours = Math.floor(sec_num / 3600);
  const minutes = Math.floor(sec_num / 60) % 60;
  const seconds = sec_num % 60;

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? "0" + v : String(v)))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
};

const VideoControls = ({
  duration,
  time = 0,
  togglePlay,
  play = false,
  fullscreen,
  onFullscreen,
  muted,
  onMute,
  onScrubChange,
  onVolume,
  onPIP,
  onCaption,
  controlOptions,
  progressBg,
  progressColor,
  tracks,
  srcLangs,
}: VideoControlProps) => {
  const [scrubRange, setScrubRange] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(5);

  useEffect(() => {
    if (time) setScrubRange((time / duration) * 100);
    else setScrubRange(0);
  }, [time, duration]);

  const scrubStyle = {
    backgroundImage: `linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${scrubRange}%, ${progressBg} ${scrubRange}%, ${progressBg} 100%)`,
  };

  const handleScrubChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScrubRange(Number(event.target.value));
    if (onScrubChange) onScrubChange((scrubRange * duration) / 100);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setVolumeLevel(value);
    if (onVolume) onVolume(value);
  };

  const handleCaptionChange = (value: string) => {
    if (onCaption) onCaption(value);
  };

  return (
    <div className="bg-gradient-to-t from-black from-60% to-transparent text-light absolute bottom-0 w-full flex flex-col justify-between opacity-0 group-hover:opacity-100">
      <div className={`mx-2 ${duration > 0 ? "block" : "hidden"}`}>
        <input
          type="range"
          min="0"
          max="100"
          step="any"
          id="scrubRange"
          value={scrubRange}
          onChange={handleScrubChange}
          onInputCapture={handleScrubChange}
          style={scrubStyle}
          className="w-full rounded-none [&&::-webkit-slider-thumb]:duration-500 [&&::-webkit-slider-thumb]:transition-all [&&::-webkit-slider-thumb]:cursor-grab h-1 cursor-pointer appearance-none [&&::-webkit-slider-thumb]:appearance-none"
        />
      </div>
      <div className="flex justify-between">
        <p className="flex justify-start gap-2 items-center">
          <Button
            title={play ? "Pause" : "Play"}
            onClick={togglePlay}
            btnBackground="transparent"
            btnColor="light"
            size="sm"
          >
            {play ? <FaPause /> : <FaPlay />}
            <span className="sr-only">Toggle Play</span>
          </Button>
          <span className="video-time font-mono text-sm">
            <time>{toHHMMSS(time)}</time>{" "}
            {duration > 0 && (
              <span>
                / <time>{toHHMMSS(duration)}</time>
              </span>
            )}
          </span>
        </p>
        <div className="flex justify-end gap-2 items-center">
          {controlOptions
            ? controlOptions.map((option, index) => {
                switch (option) {
                  case "sound":
                    return (
                      <div key={index}>
                        {SoundControl(muted, onMute, duration, volumeLevel, handleVolumeChange)}
                      </div>
                    );
                  case "fullscreen":
                    return (
                      <div key={index}>{FullscreenControl(fullscreen, duration, onFullscreen)}</div>
                    );
                  case "pip":
                    return <div key={index}>{PipControl(duration, onPIP)}</div>;
                  case "captions":
                    return (
                      <div key={index}>
                        {CaptionsControl(handleCaptionChange, tracks || [], srcLangs || [])}
                      </div>
                    );
                  default:
                    return null;
                }
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default VideoControls;
