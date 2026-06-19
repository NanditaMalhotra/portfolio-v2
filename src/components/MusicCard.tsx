"use client";

import { useRef, useState, useEffect } from "react";
import { SkipBack, SkipForward, Play, Pause } from "lucide-react";

const tracks = [
  {
    title: "Reflection Station",
    artist: "Tay Iwar",
    src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/61/3f/06/613f0679-72dd-39c9-2140-321b36fffb87/mzaf_3888331253272091705.plus.aac.p.m4a",
    artwork: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/59/c3/a6/59c3a63c-1858-3154-7978-096ce04fd9cf/11290.jpg/400x400bb.jpg",
  },
  {
    title: "Dancing With Myself",
    artist: "Remi Wolf",
    src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/33/33/df/3333df4b-c08d-eceb-c801-78ec7a54c961/mzaf_10641825848162850393.plus.aac.p.m4a",
    artwork: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a4/dc/e2/a4dce2f1-7c1e-24eb-8e33-fd3d419d35a7/26UMGIM54737.rgb.jpg/400x400bb.jpg",
  },
  {
    title: "MAURYA",
    artist: "artcriminal",
    src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/31/3d/1c/313d1c74-1abd-eb15-32ca-474ef44d1b80/mzaf_11052862403891823132.plus.aac.p.m4a",
    artwork: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/07/fd/bf/07fdbfd9-e26f-ae57-3b98-2ce31f4307dc/artwork.jpg/400x400bb.jpg",
  },
  {
    title: "Hypnotized",
    artist: "Weston Estate",
    src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/38/4f/15/384f1572-7756-2cf7-3aaf-1339709dc80b/mzaf_6859021410940235868.plus.aac.p.m4a",
    artwork: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/79/f2/4a/79f24a88-45bf-3ce7-a6cb-07bd2f047449/859733828838_cover.jpg/400x400bb.jpg",
  },
  {
    title: "East Atlanta Love Letter",
    artist: "6LACK",
    src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5e/22/ad/5e22ad60-bca5-42da-80ac-bc245bb95224/mzaf_2702652026544662431.plus.aac.p.m4a",
    artwork: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/91/da/16/91da164f-f447-115a-a88f-514927f8416e/18UMGIM53418.rgb.jpg/400x400bb.jpg",
  },
];

function fmt(s: number) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function MusicCard() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const track = tracks[trackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const wasPlaying = playing;
    audio.src = track.src;
    audio.load();
    setCurrent(0);
    setDuration(0);
    if (wasPlaying) audio.play().catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrent(audio.currentTime);
    const onLoad = () => setDuration(audio.duration);
    const onEnd = () => {
      const next = (trackIndex + 1) % tracks.length;
      setTrackIndex(next);
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoad);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoad);
      audio.removeEventListener("ended", onEnd);
    };
  }, [trackIndex]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play().catch(() => {}); setPlaying(true); }
  };

  const skipBack = () => {
    setPlaying(false);
    setTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);
  };

  const skipForward = () => {
    setPlaying(false);
    setTrackIndex((i) => (i + 1) % tracks.length);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
  };

  const pct = duration ? (current / duration) * 100 : 0;

  return (
    <div className="col-span-2 md:col-span-2 bg-white border border-border rounded-2xl p-4 flex flex-col gap-3">
      <audio ref={audioRef} src={track.src} />

      <p className="text-[9px] tracking-[0.2em] uppercase text-stone/50 font-sans">What I&apos;m Listening To</p>

      <div className="flex gap-4 items-center mt-2">
        {/* Album art */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={track.artwork}
          alt={`${track.title} artwork`}
          className="w-[108px] h-[108px] rounded-xl shrink-0 object-cover"
        />

        {/* Right: all info stacked */}
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          <div>
            <p className="text-sm font-semibold text-ink leading-snug truncate">{track.title}</p>
            <p className="text-xs text-stone">{track.artist}</p>
          </div>

        {/* Progress bar + time */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-stone/40 font-sans tabular-nums">{fmt(current)}</span>
          <div className="relative flex-1 h-[3px] bg-[#EFEFEF] rounded-full">
            <div className="absolute left-0 top-0 h-full bg-ink rounded-full" style={{ width: `${pct}%` }} />
            <input type="range" min={0} max={duration || 100} value={current} onChange={seek} className="absolute inset-0 w-full opacity-0 cursor-pointer" />
          </div>
          <span className="text-[10px] text-stone/40 font-sans tabular-nums">{fmt(duration)}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button onClick={skipBack} aria-label="Previous track" className="text-stone/40 hover:text-ink transition-colors">
            <SkipBack size={14} strokeWidth={1.5} />
          </button>
          <button onClick={toggle} aria-label={playing ? "Pause" : "Play"}
            className="w-7 h-7 rounded-full bg-ink flex items-center justify-center hover:bg-accent transition-colors">
            {playing
              ? <Pause size={11} className="text-white" strokeWidth={1.5} />
              : <Play size={10} className="text-white fill-white" strokeWidth={0} />}
          </button>
          <button onClick={skipForward} aria-label="Next track" className="text-stone/40 hover:text-ink transition-colors">
            <SkipForward size={14} strokeWidth={1.5} />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
