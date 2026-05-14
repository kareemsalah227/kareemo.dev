import { useEffect, useState } from "react";

type Props = {
  email: string;
};

export default function CopyEmailCard({ email }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="surface-card relative p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-contrast">
            Email
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex min-h-9 shrink-0 items-center rounded-full border border-border bg-bg px-3 text-sm font-medium text-text transition duration-200 ease-[var(--ease-soft)] hover:border-accent/30 hover:text-accent"
          aria-live="polite"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <p className="break-all text-base leading-tight text-text">{email}</p>

      <span
        className={`block text-xs text-accent-contrast transition duration-200 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        Email copied
      </span>
    </div>
  );
}
