import { Mail, Send } from 'lucide-react'

/* brand icons styled to match Lucide's stroke aesthetic */
function FbIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const socials = [
  {
    label: 'facebook',
    handle: 'fransyn.m',
    icon: <FbIcon />,
    href: 'https://www.facebook.com/share/14eai4jEGo5/?mibextid=wwXIfr',
  },
  {
    label: 'instagram',
    handle: '@fransyn.m',
    icon: <IgIcon />,
    href: 'https://www.instagram.com/fransyn.m?igsh=cmRtYXUzemFwb2J2&utm_source=qr',
  },
  {
    label: 'email',
    handle: 'delosreyes...',
    icon: <Mail size={20} strokeWidth={2} />,
    href: 'mailto:delosreyesfrancinemarchelle@gmail.com',
  },
  {
    label: 'linkedin',
    handle: 'francine marchelle',
    icon: <LinkedInIcon />,
    href: 'https://www.linkedin.com/in/francine-marchelle-delos-reyes-1a3b14366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    label: 'telegram',
    handle: '@francinemarchelle',
    icon: <Send size={20} strokeWidth={2} />,
    href: 'https://t.me/francinemarchelle',
  },
  {
    label: 'github',
    handle: 'FrancineMarchelle5',
    icon: <GitHubIcon />,
    href: 'https://github.com/FrancineMarchelle5',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-28 px-5 sm:px-8 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.38em] text-muted-foreground mb-3">
          get in touch
        </p>
        <div className="w-8 h-px bg-border mx-auto mb-10" />
        <h2
          className="font-serif italic text-foreground mb-10 sm:mb-16"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
        >
          let's connect
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {socials.map(({ label, handle, icon, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-border rounded-sm px-5 py-4 text-left hover:border-foreground/30 hover:bg-muted/40 transition-all duration-300"
            >
              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200 shrink-0">
                {icon}
              </span>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-0.5">
                  {label}
                </p>
                <p className="text-sm text-foreground font-light truncate">
                  {handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
