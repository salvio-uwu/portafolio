export default function Footer() {
  return (
    <footer className="border-t border-charcoal/[0.04] bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <p className="text-sm font-medium tracking-tight text-charcoal/20">
          Salvio Ulloa &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-6">
          <a
            href="mailto:salvioulloa@gmail.com"
            className="text-sm text-charcoal/25 transition-colors hover:text-terracota"
          >
            salvioulloa@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/salvioulloa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-charcoal/25 transition-colors hover:text-terracota"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
