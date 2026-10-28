import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M1 8h29M23 1.5 30 8l-7 6.5" />
    </svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M31 8H2M9 1.5 2 8l7 6.5" />
    </svg>
  );
}

/** Four-point sparkle used in dividers and the logo accent */
export function Sparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0c.6 6.1 5.3 11.1 12 12-6.7.9-11.4 5.9-12 12-.6-6.1-5.3-11.1-12-12C6.7 11.1 11.4 6.1 12 0Z" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 1.8 3.1 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.6l-6.4 3.6 1.5-7.1L1.7 9.2l7.2-.8L12 1.8Z" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Facebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.6 22v-8.4h2.9l.4-3.4h-3.3V8.1c0-1 .3-1.6 1.7-1.6H17V3.4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4v2.5H7.2v3.4h2.9V22h3.5Z" />
    </svg>
  );
}

export function Diamond(props: IconProps) {
  return (
    <svg viewBox="0 0 61 52" fill="none" stroke="currentColor" strokeWidth={3} strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M13 1.5h35l11.5 14.5-29 34.5-29-34.5L13 1.5Z" />
      <path d="M1.5 16h58M13 1.5 21 16l9.5-14.5L40 16l8-14.5M21 16l9.5 34.5L40 16" />
    </svg>
  );
}

export function DiamondSolid(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M17 9h30l14 16-29 32L3 25 17 9Z" />
      <path fill="none" stroke="#fbe8d4" strokeWidth={2.4} strokeLinejoin="round" d="M3 25h58M17 9l7 16 8-16 8 16 7-16M24 25l8 32 8-32" />
    </svg>
  );
}

export function Headset(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M32 6C18.7 6 8 16.7 8 30v12a8 8 0 0 0 8 8h4V32h-6v-2c0-9.9 8.1-18 18-18s18 8.1 18 18v2h-6v18h4c.4 0 .8 0 1.2-.1C47.8 53.6 44 56 39.6 56H36a4 4 0 1 0 0 4h3.6c7.3 0 13.5-4.9 15.3-11.8A8 8 0 0 0 56 42V30C56 16.7 45.3 6 32 6Z" />
    </svg>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M32 4 8 12v18c0 15.3 10.2 27.4 24 30 13.8-2.6 24-14.7 24-30V12L32 4Z" />
      <path fill="none" stroke="#fbe8d4" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" d="m21 32 8 8 15-16" />
    </svg>
  );
}

export function ShieldOutline(props: IconProps) {
  return (
    <svg viewBox="0 0 51 61" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M25.5 1.5 49.5 10v19.5c0 14.5-9.6 25.6-24 30-14.4-4.4-24-15.5-24-30V10l24-8.5Z" />
      <path d="m15 31 7.5 7.5L37 24" />
    </svg>
  );
}

export function Gift(props: IconProps) {
  return (
    <svg viewBox="0 0 56 57" fill="none" stroke="currentColor" strokeWidth={3} strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="1.5" y="17" width="53" height="11" />
      <path d="M5.5 28v27.5h45V28M23 17v38.5M33 17v38.5" />
      <path d="M28 17C25 7 15-1 12 6s7 11 16 11ZM28 17c3-10 13-18 16-11s-7 11-16 11Z" />
    </svg>
  );
}

export function InfinityLoop(props: IconProps) {
  return (
    <svg viewBox="0 0 65 30" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true" {...props}>
      <path d="M32.5 15c-5.5-7-10.5-13.5-17.5-13.5a13.5 13.5 0 0 0 0 27c7 0 12-6.5 17.5-13.5Zm0 0c5.5 7 10.5 13.5 17.5 13.5a13.5 13.5 0 0 0 0-27c-7 0-12 6.5-17.5 13.5Z" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" aria-hidden="true" {...props}>
      <circle cx="24" cy="25" r="19" />
      <path d="M24 13v12l5 4M17 4.5 13 6M31 4.5 35 6" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M24 3C15.7 3 9 9.6 9 17.8 9 29 24 45 24 45s15-16 15-27.2C39 9.6 32.3 3 24 3Z" />
      <circle cx="24" cy="18" r="5.8" fill="#fbe8d4" />
    </svg>
  );
}

export function PhoneCall(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.4 5.5 9 7.1c-2.6.8-4.2 3.5-3.6 6.2 3.1 13.6 13.7 24.2 27.3 27.3 2.7.6 5.4-1 6.2-3.6l1.6-5.4a2.6 2.6 0 0 0-1.4-3.1l-7-3.2a2.6 2.6 0 0 0-3.1.8l-2.5 3.2c-5.4-2.6-9.7-6.9-12.3-12.3l3.2-2.5c.9-.7 1.2-2 .8-3.1l-3.2-7a2.6 2.6 0 0 0-3.1-1.4Z" />
      <path fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" d="M27 6.5c7.2 1.1 13.4 7.3 14.5 14.5M26.5 13c3.9.8 7.7 4.6 8.5 8.5" />
    </svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3.2} aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="19" />
      <path d="M5 24h38M24 5c5.5 5.2 8 11.6 8 19s-2.5 13.8-8 19c-5.5-5.2-8-11.6-8-19s2.5-13.8 8-19ZM8 14h32M8 34h32" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <rect x="4" y="9" width="40" height="30" rx="2" fill="currentColor" />
      <path fill="none" stroke="#fbe8d4" strokeWidth={2.6} strokeLinejoin="round" d="m6 12 18 15 18-15M6 36l13-12M42 36 29 24" />
    </svg>
  );
}

export function Calendar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true" {...props}>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4M8 14h2M14 14h2M8 17h2" />
    </svg>
  );
}

export function Expand(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M14 4h6v6M20 4l-7 7M10 20H4v-6M4 20l7-7" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m5 9 7 7 7-7" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

/** Heavy "66" opening quote mark (rotate 180° for the closing mark) */
export function QuoteMark(props: IconProps) {
  const mark = "M24 2C11 7 2 18 2 33c0 9 6 15 13 15s12-5 12-12-5-12-12-12c-2 0-4 .5-5 1 2-9 8-16 16-20L24 2Z";
  return (
    <svg viewBox="0 0 62 50" fill="currentColor" aria-hidden="true" {...props}>
      <path d={mark} />
      <path d={mark} transform="translate(33 0)" />
    </svg>
  );
}
