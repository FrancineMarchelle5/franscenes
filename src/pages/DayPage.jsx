import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { days } from '../data/days'
import Lightbox from '../components/Lightbox'
import VideoGallery from '../components/VideoGallery'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DayPage() {
  const { slug } = useParams()
  const day = days.find((d) => d.slug === slug)

  if (!day) return <Navigate to="/" replace />

  const currentIdx = days.findIndex((d) => d.slug === slug)
  const prevDay = days[currentIdx - 1] ?? null
  const nextDay = days[currentIdx + 1] ?? null

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* page header */}
      <header className="pt-28 pb-16 px-8 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            back
          </Link>

          <p className="text-[10px] uppercase tracking-[0.38em] text-muted-foreground mb-4">
            {day.label}
          </p>
          <h1
            className="font-serif italic text-foreground leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
          >
            {day.title}
          </h1>
          <p className="text-sm text-muted-foreground tracking-wide">
            {day.subtitle}
          </p>
          <div className="w-8 h-px bg-border mt-6" />
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xl">
            {day.intro}
          </p>
        </div>
      </header>

      {/* activities */}
      <main className="max-w-2xl mx-auto px-8 py-20">
        <div className="space-y-24">
          {day.activities.map((activity, i) => (
            <article key={activity.id} id={activity.id}>
              {/* activity header */}
              <div className="flex items-start gap-4 mb-8">
                <span className="text-2xl leading-none mt-0.5">{activity.emoji}</span>
                <div>
                  <h2
                    className="font-serif italic text-foreground leading-tight mb-1"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 1.85rem)' }}
                  >
                    {activity.title}
                  </h2>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {activity.location}
                  </p>
                </div>
              </div>

              {/* description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {activity.description}
              </p>

              {/* photo album */}
              {activity.photos?.length > 0 && (
                <div className="mb-8">
                  <Lightbox photos={activity.photos} caption={activity.photosCaption} />
                </div>
              )}

              {/* videos */}
              {activity.videos?.length > 0 && (
                <div className="mb-8">
                  <VideoGallery videos={activity.videos} />
                </div>
              )}

              {/* story */}
              {activity.story && (
                <div className="mb-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-3">
                    the scene
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {activity.story}
                  </p>
                </div>
              )}

              {/* feelings */}
              {activity.feelings && (
                <div className="mb-6 pl-4 border-l-2 border-primary/30">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-2">
                    feelings
                  </p>
                  <p className="text-sm italic text-foreground/70 leading-relaxed">
                    {activity.feelings}
                  </p>
                </div>
              )}

              {/* reflections */}
              {activity.realizations?.length > 0 && (
                <div className="mb-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-3">
                    reflections
                  </p>
                  <ul className="space-y-2">
                    {activity.realizations.map((r, j) => (
                      <li key={j} className="flex gap-3 text-sm text-foreground/70 leading-relaxed">
                        <span className="text-primary/50 mt-0.5 shrink-0">—</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* did you know */}
              {activity.didYouKnow?.length > 0 && (
                <div className="mb-6 bg-muted/30 border border-border rounded-sm px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-primary/70 mb-3">
                    did you know?
                  </p>
                  <ul className="space-y-2.5">
                    {activity.didYouKnow.map((fact, j) => (
                      <li key={j} className="flex gap-3 text-sm text-foreground/70 leading-relaxed">
                        <span className="text-primary/50 mt-0.5 shrink-0">✦</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* divider between activities */}
              {i < day.activities.length - 1 && (
                <div className="mt-16 w-full h-px bg-border" />
              )}
            </article>
          ))}
        </div>
      </main>

      {/* prev / next day navigation */}
      <nav className="max-w-2xl mx-auto px-8 pb-24 flex items-center justify-between border-t border-border pt-12">
        {prevDay ? (
          <Link
            to={`/day/${prevDay.slug}`}
            className="group flex flex-col gap-1"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-1.5">
              ← previous
            </span>
            <span className="font-serif italic text-lg text-foreground group-hover:text-primary transition-colors">
              {prevDay.title}
            </span>
          </Link>
        ) : <div />}

        {nextDay ? (
          <Link
            to={`/day/${nextDay.slug}`}
            className="group flex flex-col gap-1 text-right"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-1.5 justify-end">
              next →
            </span>
            <span className="font-serif italic text-lg text-foreground group-hover:text-primary transition-colors">
              {nextDay.title}
            </span>
          </Link>
        ) : <div />}
      </nav>

      <Footer />
    </div>
  )
}
