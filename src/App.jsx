import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DayPage from './pages/DayPage'
import { days } from './data/days'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) }, [pathname])
  return null
}

/* cover images mapped by day slug */
const coverImgs = {
  'prologue': '/PROLOGUE/city_tour_003.jpg',
  'day-0':   '/DAY 0 - CITY TOUR/luneta/city_tour_040.jpeg',
  'day-1':   '/DAY 1/DAY01_HYTECH/hytech_001.jpeg',
  'day-2': '/DAY 2/DAY02_MMDA/IMG_2739.JPG',
  'day-3': '/DAY 3/DAY03_MICROSOURCING/IMG_3391.JPG',
  'day-4': '/DAY 4 - TAGAYTAY/peoples_park/att.4P69lz5_c2P8vFiItSnbsM5nB-F8O7C5trt74FEzw-o.jpg',
  'day-5': '/DAY 5/MINESVIEW/IMG_4591.JPG',
  'day-6': '/DAY 6/652350a5520edd14bfd194d98b95157a.jpeg',
}

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

function DayEntry({ day, index }) {
  const img = coverImgs[day.slug] ?? ''
  const num = String(index).padStart(2, '0')
  const [ref, visible] = useInView()

  return (
    <article
      ref={ref}
      className="border-t border-border pt-8 pb-2"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${index * 60}ms, transform 0.7s ease ${index * 60}ms`,
      }}
    >
      <div className="flex items-baseline justify-between mb-5">
        <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          {num} — {day.label.toLowerCase()}
        </span>
        <Link
          to={`/day/${day.slug}`}
          className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          read →
        </Link>
      </div>

      <Link to={`/day/${day.slug}`} className="block group">
        <div className="w-full overflow-hidden mb-5" style={{ aspectRatio: '16/9' }}>
          {img ? (
            <img
              src={img}
              alt={day.title}
              className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-muted/40 flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                photos coming soon
              </span>
            </div>
          )}
        </div>

        <h2
          className="font-serif italic text-foreground leading-tight mb-1.5 group-hover:text-primary transition-colors duration-200"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)' }}
        >
          {day.title}
        </h2>
      </Link>

      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {day.subtitle}
      </p>
    </article>
  )
}

function HomePage() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Navbar />
      <Hero />

      {/* diary section */}
      <main id="days" className="max-w-2xl mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-24 sm:pb-32">
        <header className="mb-12 sm:mb-16">
          <p className="text-[10px] uppercase tracking-[0.38em] text-muted-foreground mb-3">
            the diary
          </p>
          <div className="w-8 h-px bg-border" />
        </header>

        <div className="space-y-14 sm:space-y-20">
          {days.map((day, i) => (
            <DayEntry key={day.slug} day={day} index={i} />
          ))}
        </div>
      </main>

      {/* about section */}
      <section id="about" className="max-w-2xl mx-auto px-5 sm:px-8 py-20 sm:py-28 border-t border-border">
        <header className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.38em] text-muted-foreground mb-3">about</p>
          <div className="w-8 h-px bg-border" />
        </header>

        <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-14">
          <div className="shrink-0">
            <p
              className="font-serif italic text-foreground leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}
            >
              Francine<br />Marchelle<br />Delos Reyes
            </p>
            <div className="mt-4 w-6 h-px bg-border" />
            <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              francine
            </p>
          </div>

          <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
            <p>
              4th year BSIT student at <span className="text-foreground">Western Mindanao State University</span>, graduating with a degree in Information Technology and a curiosity that refuses to stay in a classroom.
            </p>
            <p>
              This travel blog is a record of a seven-day DJM Educational Tour across the Philippines — a curriculum-required immersion that brought her and her classmates face-to-face with the industries, agencies, and real-world environments that IT professionals actually work in. From BPO floors to military academies, each stop was a lesson textbooks couldn't teach.
            </p>
            <p>
              Traveling, for Francine, is how the world makes sense. This blog is proof of that.
            </p>
          </div>
        </div>
      </section>

      <Contact />

      {/* quote block */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p
            className="font-serif italic leading-relaxed opacity-90"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 1.85rem)' }}
          >
            "from classroom walls to city halls —<br />
            seven days of learning what textbooks never taught."
          </p>
          <div className="mt-10 w-10 h-px bg-primary-foreground/25 mx-auto" />
          <p className="mt-7 text-[10px] uppercase tracking-[0.35em] opacity-40">
            franscenes · 2025
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/day/:slug" element={<DayPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
