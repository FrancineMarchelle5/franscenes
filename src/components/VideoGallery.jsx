import { useState } from 'react'
import { Play } from 'lucide-react'

function VideoCard({ src, index, total }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
      {playing ? (
        <video
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
          controls
          autoPlay
        />
      ) : (
        <>
          <video
            src={src}
            className="absolute inset-0 w-full h-full object-cover"
            preload="metadata"
            muted
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setPlaying(true)}
              className="group relative inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] border border-white/50 px-10 py-3.5 text-white hover:bg-white hover:text-black transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              <Play size={11} strokeWidth={1.5} fill="currentColor" />
              Play Video
            </button>
          </div>

          <span className="absolute bottom-3 right-3 text-[9px] uppercase tracking-[0.2em] text-white/40">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </>
      )}
    </div>
  )
}

export default function VideoGallery({ videos = [] }) {
  if (!videos || videos.length === 0) return null

  return (
    <>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-px bg-border" />
        <p className="text-[10px] uppercase tracking-[0.38em] text-muted-foreground">videos</p>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="space-y-3">
        {videos.map((src, i) => (
          <VideoCard key={i} src={src} index={i} total={videos.length} />
        ))}
      </div>
    </>
  )
}
