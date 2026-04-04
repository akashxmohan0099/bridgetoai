export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <span className="text-[15px] font-bold text-text">Bridge To AI</span>
            <p className="mt-2 text-[14px] text-text-muted leading-relaxed">Making AI work for your business.</p>
          </div>
          <div>
            <ul className="space-y-2">
              {[
                { label: "What we offer", href: "#offerings" },
                { label: "Service areas", href: "#services" },
                { label: "Process", href: "#how-it-works" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="text-[14px] text-text-muted hover:text-primary transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-2 text-[14px] text-text-muted">
            <p>bridgetoai.com.au</p>
            <p>Australia-Wide</p>
            <a href="mailto:hello@bridgetoai.com.au" className="hover:text-primary transition-colors block">hello@bridgetoai.com.au</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-text-light">
          <span>&copy; 2026 Bridge To AI. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>ABN XX XXX XXX XXX</span>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
