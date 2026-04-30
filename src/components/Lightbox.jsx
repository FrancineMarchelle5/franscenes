import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'


export default function Lightbox({ photos = [], caption = '' }) {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % photos.length)
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + photos.length) % photos.length)
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, photos.length])

  if (!photos || photos.length === 0) {
    return (
      <div className="w-full aspect-video bg-muted/40 border border-border flex items-center justify-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          photos coming soon
        </p>
      </div>
    )
  }

  const prev = () => setIdx((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setIdx((i) => (i + 1) % photos.length)

  return (
    <>
      {/* collage — two manual flex columns + full-width last photo */}
      {photos.length === 1 ? (
        <button
          onClick={() => { setIdx(0); setOpen(true) }}
          className="block w-full overflow-hidden hover:opacity-90 transition-opacity duration-200"
        >
          <img src={photos[0]} alt="" className="w-full h-auto" loading="lazy" />
        </button>
      ) : (() => {
        // Build row groups — each row is either [full] or [half, half]
        // guarantees zero gaps for any photo count
        const GROUP_SEQ = ['A','B','B','A','B','A','B','B','A','B','B','A','B']
        const FULL_AR   = ['16/9','2/1','16/9','3/2']
        // both halves in a pair MUST share the same ratio — otherwise heights differ and gaps appear
        const HALF_PAIRS = [
          ['1/1',  '1/1' ],
          ['4/3',  '4/3' ],
          ['3/4',  '3/4' ],
          ['1/1',  '1/1' ],
          ['4/3',  '4/3' ],
          ['3/4',  '3/4' ],
        ]
        const cells = []
        let rem = photos.length, gi = 0, fi = 0, pi = 0
        while (rem > 0) {
          const g = GROUP_SEQ[gi++ % GROUP_SEQ.length]
          if (g === 'A' || rem === 1) {
            cells.push({ col: 2, ar: FULL_AR[fi++ % FULL_AR.length] })
            rem--
          } else {
            const [a1, a2] = HALF_PAIRS[pi++ % HALF_PAIRS.length]
            cells.push({ col: 1, ar: a1 })
            cells.push({ col: 1, ar: a2 })
            rem -= 2
          }
        }
        return (
          <div className="grid grid-cols-2 gap-1">
            {cells.map(({ col, ar }, i) => (
              <button
                key={i}
                onClick={() => { setIdx(i); setOpen(true) }}
                className="relative block overflow-hidden hover:opacity-90 transition-opacity duration-200"
                style={{ gridColumn: col === 2 ? '1 / -1' : 'span 1', aspectRatio: ar }}
              >
                <img
                  src={photos[i]}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )
      })()}

      {caption && (
        <p className="mt-2.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {caption}
        </p>
      )}

      {/* lightbox overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[200] bg-black/92 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          {/* close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            aria-label="close"
          >
            <X size={22} strokeWidth={1.5} />
          </button>

          {/* counter */}
          <span className="absolute top-5 left-5 text-[11px] uppercase tracking-[0.2em] text-white/40">
            {idx + 1} / {photos.length}
          </span>

          {/* prev */}
          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all"
              aria-label="previous"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
          )}

          {/* image */}
          <img
            src={photos[idx]}
            alt=""
            className="max-h-[88vh] max-w-[88vw] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />

          {/* next */}
          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all"
              aria-label="next"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          )}

          {/* caption */}
          {caption && (
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-white/40 text-center px-4">
              {caption}
            </p>
          )}

          {/* dot indicators */}
          {photos.length > 1 && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIdx(i) }}
                  className={`h-px transition-all duration-300 bg-white ${
                    i === idx ? 'w-6 opacity-70' : 'w-2 opacity-25'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}
