import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="w-full px-8 md:px-16 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="font-display text-lg text-ink">Nandita Malhotra</p>

        <div className="flex flex-wrap items-center gap-6 text-sm text-stone">
          <a
            href="mailto:nandita.anna@gmail.com"
            className="hover:text-ink transition-colors"
          >
            nandita.anna@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/nanditamalhotra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors inline-flex items-center gap-0.5"
          >
            LinkedIn
            <ArrowUpRight size={12} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
