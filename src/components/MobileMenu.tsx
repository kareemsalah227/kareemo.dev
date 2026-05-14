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

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-surface px-3 text-text transition duration-200 ease-[var(--ease-soft)] hover:border-accent/30 hover:text-accent"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition duration-300 ease-[var(--ease-soft)] ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition duration-200 ease-[var(--ease-soft)] ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current transition duration-300 ease-[var(--ease-soft)] ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <div className="pointer-events-none fixed inset-0 z-50" aria-hidden={!open}>
          <button
            type="button"
            className="pointer-events-auto absolute inset-x-0 bottom-0 top-[var(--header-height)] bg-text/20 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />

          <div
            id="mobile-menu-panel"
            className="pointer-events-auto absolute right-0 top-[var(--header-height)] flex h-[calc(100dvh-var(--header-height))] w-[min(86vw,22rem)] flex-col border-l border-border bg-surface px-5 pb-6 pt-6 shadow-[0_20px_45px_rgba(35,33,31,0.16)] animate-fade-up"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = currentPath === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-lg transition duration-200 ease-[var(--ease-soft)] ${
                      isActive
                        ? "bg-accent-soft text-accent"
                        : "text-text hover:bg-bg"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href={resumeHref}
                className="mt-2 rounded-2xl bg-accent px-4 py-3 text-lg text-white transition duration-200 ease-[var(--ease-soft)] hover:bg-accent/90"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </nav>

            <div className="mt-auto border-t border-border pt-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Elsewhere
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-border px-3 py-2 text-sm font-medium text-text transition duration-200 ease-[var(--ease-soft)] hover:border-accent/30 hover:text-accent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
