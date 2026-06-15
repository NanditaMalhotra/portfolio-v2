/* Credibility bar: real logos for experience and education, no hover effects */

export default function CredibilityBar() {
  return (
    <div className="border-t border-border pt-6 mt-auto">
      {/* Worked With row */}
      <p className="text-[9px] tracking-[0.2em] uppercase text-stone/50 mb-3 font-sans">
        Worked With
      </p>
      <div className="flex items-center gap-6 mb-5 flex-wrap">
        <LogoLink href="https://www.toyota.com">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/toyota.svg" alt="Toyota" className="h-6 w-auto" />
        </LogoLink>
        <LogoLink href="https://www.cooperhewitt.org">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/cooper-hewitt.svg" alt="Cooper Hewitt" className="h-6 w-auto" />
        </LogoLink>
        <LogoLink href="https://hucapital.co">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/hucapital.svg" alt="HuCapital" className="h-6 w-auto" />
        </LogoLink>
        <LogoLink href="https://dxcenter.pratt.edu">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/dxcenter.png" alt="DxCenter" className="h-6 w-auto" />
        </LogoLink>
      </div>

      {/* Education row */}
      <p className="text-[9px] tracking-[0.2em] uppercase text-stone/50 mb-3 font-sans">
        Education
      </p>
      <div className="flex items-center gap-8 flex-wrap">
        <LogoLink href="https://www.pratt.edu">
          <div className="flex flex-col gap-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pratt-logo.svg" alt="Pratt Institute" className="h-6 w-auto" />
            <p className="text-[10px] text-stone leading-tight">MS, Information Experience Design</p>
          </div>
        </LogoLink>
        <LogoLink href="https://www.utexas.edu">
          <div className="flex flex-col gap-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ut-austin-logo.svg" alt="The University of Texas at Austin" className="h-6 w-auto" />
            <p className="text-[10px] text-stone leading-tight">BFA, Visual &amp; Communications Design</p>
          </div>
        </LogoLink>
      </div>
    </div>
  );
}

function LogoLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
