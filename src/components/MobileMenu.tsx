import { useEffect, useState } from "react";
import type { NavItem, SocialLink } from "../data/site";

type Props = {
  currentPath: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  resumeHref: string;
};

export default function MobileMenu({
  currentPath,
  navItems,
  socialLinks,
  resumeHref,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface px-4 text-sm font-medium text-text"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div
          id="mobile-menu-panel"
          className="fixed inset-x-4 top-[4.6rem] z-50 rounded-[1.75rem] border border-border bg-surface p-5 shadow-card"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-lg ${
                    isActive ? "bg-accent-soft text-accent" : "text-text"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={resumeHref}
              className="mt-2 rounded-2xl bg-accent px-4 py-3 text-lg text-white"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </nav>

          <div className="mt-6 border-t border-border pt-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Elsewhere
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="title-link text-sm font-medium text-text"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
