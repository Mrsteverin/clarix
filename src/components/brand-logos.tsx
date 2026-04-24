// Authentic brand SVG logos for channel cards.
// Each logo uses the official brand colors and renders inside a white rounded tile
// so trademark colors stay accurate regardless of theme.
import type { ReactElement } from "react";

type LogoProps = { className?: string };
type Logo = (p: LogoProps) => ReactElement;

export function GoogleAnalyticsLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 192 192" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="#F9AB00" d="M130 28v130c0 14.5 10 22.7 20.6 22.7 9.8 0 20.6-6.9 20.6-22.7V29c0-13.3-9.8-21.6-20.6-21.6S130 16.7 130 28z"/>
      <path fill="#E37400" d="M75.5 96v62c0 14.5 10 22.7 20.6 22.7 9.8 0 20.6-6.9 20.6-22.7V97c0-13.3-9.8-21.6-20.6-21.6S75.5 84.7 75.5 96z"/>
      <circle fill="#E37400" cx="41.6" cy="160" r="20.6"/>
    </svg>
  );
}

export function GoogleSearchConsoleLogo({ className }: LogoProps) {
  // Bar chart with magnifier — Google Search Console mark
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Tall blue bar */}
      <rect x="44" y="14" width="10" height="32" rx="5" fill="#4285F4"/>
      {/* Medium green bar */}
      <rect x="32" y="22" width="10" height="24" rx="5" fill="#34A853"/>
      {/* Short red bar */}
      <rect x="20" y="30" width="10" height="16" rx="5" fill="#EA4335"/>
      {/* Magnifier ring */}
      <circle cx="22" cy="38" r="9" fill="none" stroke="#FBBC04" strokeWidth="4"/>
      {/* Magnifier handle */}
      <rect x="9" y="46" width="11" height="4" rx="2" transform="rotate(-45 9 46)" fill="#FBBC04"/>
    </svg>
  );
}

export function GoogleAdsLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 192 192" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="#FBBC04" d="M75.5 12.5 9.6 126.6c-7 12-2.7 27.5 9.5 34.5 12 7 27.5 2.7 34.5-9.5L119.5 37.5c7-12 2.7-27.5-9.5-34.5-12-7-27.5-2.7-34.5 9.5z"/>
      <path fill="#4285F4" d="m116.5 12.5 65.9 114c7 12 2.7 27.5-9.5 34.5-12 7-27.5 2.7-34.5-9.5L72.5 37.5c-7-12-2.7-27.5 9.5-34.5 12-7 27.5-2.7 34.5 9.5z"/>
      <circle fill="#34A853" cx="34.4" cy="146.4" r="25.4"/>
    </svg>
  );
}

export function MetaLogo({ className }: LogoProps) {
  // Meta infinity mark — accurate brand glyph with blue gradient
  return (
    <svg viewBox="0 0 287 191" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="meta-grad-a" x1="62.13" y1="120.24" x2="259.39" y2="130.32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0064E1"/>
          <stop offset=".4" stopColor="#0064E1"/>
          <stop offset=".83" stopColor="#0073EE"/>
          <stop offset="1" stopColor="#0082FB"/>
        </linearGradient>
        <linearGradient id="meta-grad-b" x1="41.42" y1="132.95" x2="41.42" y2="60.34" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0082FB"/>
          <stop offset="1" stopColor="#0064E0"/>
        </linearGradient>
      </defs>
      <path fill="#0081FB" d="M31.06 126c0 11 2.41 19.41 5.56 24.51A19 19 0 0 0 53.19 160c8.1 0 15.51-2 29.79-21.76 11.44-15.83 24.92-38 34-51.94l15.36-23.6c10.67-16.39 23-34.61 37.18-34.61 11.5 0 22.33 6.66 30.61 21.26 9.06 16 13.46 36.16 13.46 57 0 12.34-2.43 21.42-6.59 28.59-4 6.93-11.86 13.85-25.05 13.85v-19.83c11.3 0 14.12-10.39 14.12-22.27 0-16.93-3.95-35.72-12.65-49.13-6.18-9.51-14.18-15.31-23-15.31-9.51 0-17.16 7.16-25.77 19.94-4.58 6.78-9.27 15.05-14.54 24.39l-9.05 16c-18.21 32.27-22.83 39.62-31.95 51.74C84.43 154 71.69 162 53.19 162 41.59 162 31.51 159.46 23.18 154 13.43 147.66 5.86 137.79 1.59 124.92Z"/>
      <path fill="url(#meta-grad-b)" d="M24.49 67.81C32.16 56 43.24 47.73 55.95 47.73c7.36 0 14.68 2.18 22.32 8.42 8.36 6.83 17.27 18.07 28.39 36.59l4 6.65C120.13 115 125.13 122.92 128 126.7c3.7 4.86 6.29 6.31 9.66 6.31 8.69 0 11.25-8 11.25-22.59l17.49-.55c0 13.07-2.61 22.86-7.05 30-3.66 5.91-9.36 9.84-15.73 9.84-9.78 0-15.69-8.36-25.62-25.07L98.74 90.2c-13.69-22.92-26.27-35.78-37.41-35.78-12 0-21.55 11.81-29.83 26.71Z"/>
      <path fill="url(#meta-grad-a)" d="M55.95 65.78c-12 0-22.13 7.7-30.32 19.31-11.59 16.41-18.69 40.85-18.69 64.27 0 9.65 2.12 17.06 5.4 22.62l-17.41 9.85C-9.18 173-15.91 159.16-15.91 149.4c0-27.05 7.43-55.25 21.59-77 12.4-19 30.55-30.95 51.86-30.95Z"/>
    </svg>
  );
}

export function GoogleBusinessLogo({ className }: LogoProps) {
  // Google Business Profile — storefront with G mark
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Awning */}
      <path fill="#669DF6" d="M8 16h48l-4 12H12z"/>
      <path fill="#AECBFA" d="M8 16h12l-2 12H12z"/>
      <path fill="#AECBFA" d="M32 16h12l-2 12H30z"/>
      {/* Storefront body */}
      <rect x="12" y="28" width="40" height="24" rx="2" fill="#4285F4"/>
      {/* G mark */}
      <circle cx="32" cy="40" r="7" fill="none" stroke="#fff" strokeWidth="2.5"/>
      <path d="M32 40h5" stroke="#fff" strokeWidth="2.5" strokeLinecap="square"/>
      <path d="M37 40v3" stroke="#fff" strokeWidth="2.5" strokeLinecap="square"/>
    </svg>
  );
}

export function LinkedInLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#0A66C2"/>
      <path fill="#fff" d="M14.5 18.5h5.6v18.6h-5.6V18.5zm2.8-8.6c1.8 0 3.2 1.5 3.2 3.2 0 1.8-1.5 3.2-3.2 3.2-1.8 0-3.2-1.5-3.2-3.2 0-1.8 1.5-3.2 3.2-3.2zM23.7 18.5h5.4v2.5h.1c.7-1.4 2.6-2.9 5.3-2.9 5.6 0 6.7 3.7 6.7 8.6v10.4H35.6V27.7c0-2.1 0-4.7-2.9-4.7-2.9 0-3.4 2.3-3.4 4.6v9.5h-5.6V18.5z"/>
    </svg>
  );
}

export function TikTokLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#000"/>
      <path fill="#25F4EE" d="M30.5 18.5c-1.6-1-2.8-2.6-3.3-4.5h-3.5v17.6c0 2-1.6 3.7-3.7 3.7-2 0-3.7-1.6-3.7-3.7s1.6-3.7 3.7-3.7c.4 0 .8.1 1.2.2v-3.6c-.4 0-.8-.1-1.2-.1-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3v-9c1.5 1 3.3 1.6 5.2 1.6v-3.6c-.7-.1-1.4-.1-2-.2z"/>
      <path fill="#FE2C55" d="M32.5 16.5c-1.6-1-2.8-2.6-3.3-4.5h-3.5v17.6c0 2-1.6 3.7-3.7 3.7-2 0-3.7-1.6-3.7-3.7s1.6-3.7 3.7-3.7c.4 0 .8.1 1.2.2v-3.6c-.4 0-.8-.1-1.2-.1-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3v-9c1.5 1 3.3 1.6 5.2 1.6v-3.6c-.7-.1-1.4-.1-2-.2z"/>
      <path fill="#fff" d="M31.5 17.5c-1.6-1-2.8-2.6-3.3-4.5h-3.5v17.6c0 2-1.6 3.7-3.7 3.7-2 0-3.7-1.6-3.7-3.7s1.6-3.7 3.7-3.7c.4 0 .8.1 1.2.2v-3.6c-.4 0-.8-.1-1.2-.1-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3v-9c1.5 1 3.3 1.6 5.2 1.6v-3.6c-.7-.1-1.4-.1-2-.2z"/>
    </svg>
  );
}

export function ShopifyLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 109 124" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="#95BF47" d="M74.7 14.8c-.1-.5-.5-.8-.9-.9-.4 0-7.7-.6-7.7-.6S60 7.4 59.4 6.7c-.6-.6-1.7-.4-2.2-.3-.1 0-1.2.4-3 .9C52.5 3 49.4 0 44.5 0h-.4c-1.4-1.8-3.1-2.6-4.6-2.6C28.1-2.6 22.5 11.5 20.7 18.7c-4.3 1.3-7.4 2.3-7.8 2.4-2.4.8-2.5.8-2.8 3.1C9.9 25.9 3.6 74.7 3.6 74.7L52.7 84l26.6-5.8s-4.5-46.6-4.6-63.4zM52 11.6c-1.4.4-3 .9-4.7 1.5v-1c0-3.1-.4-5.7-1.1-7.7 2.6.4 4.3 3.3 5.8 7.2zM43.1 5.3c.8 2.1 1.3 5.1 1.3 9.1v.5c-3 .9-6.3 1.9-9.6 3 1.9-7.1 5.4-10.6 8.3-12.6zm-3.7-3.5c.5 0 1 .2 1.5.5-3.8 1.8-7.9 6.3-9.6 15.4l-7.6 2.3c2-7 6.7-18.2 15.7-18.2z"/>
      <path fill="#5E8E3E" d="M73.8 13.9c-.4 0-7.7-.6-7.7-.6S60 7.4 59.4 6.7c-.2-.2-.5-.3-.8-.4l-3.7 89.8 24.4-5.3S74.8 14.7 74.7 14.8c-.1-.5-.5-.8-.9-.9z"/>
      <path fill="#fff" d="m44.5 27.4-3 8.9s-2.6-1.4-5.9-1.4c-4.7 0-5 3-5 3.7 0 4.1 10.7 5.7 10.7 15.3 0 7.6-4.8 12.4-11.3 12.4-7.7 0-11.7-4.8-11.7-4.8l2.1-6.8s4.1 3.5 7.5 3.5c2.2 0 3.2-1.8 3.2-3.1 0-5.4-8.8-5.6-8.8-14.4 0-7.4 5.3-14.6 16.1-14.6 4.1 0 6.1 1.3 6.1 1.3z"/>
    </svg>
  );
}

export function MatomoLogo({ className }: LogoProps) {
  // Matomo — three overlapping circles in brand orange/yellow
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="40" r="14" fill="#3152A0"/>
      <circle cx="44" cy="40" r="14" fill="#F38334"/>
      <circle cx="32" cy="22" r="14" fill="#F9C32B"/>
    </svg>
  );
}

export function YouTubeLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="11" width="40" height="26" rx="6" fill="#FF0000"/>
      <path fill="#fff" d="M20 18v12l10-6z"/>
    </svg>
  );
}

export function ExcelLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="#185C37" d="M30 6 6 10v28l24 4V6z"/>
      <path fill="#21A366" d="M30 14h12v8H30z"/>
      <path fill="#107C41" d="M30 22h12v8H30z"/>
      <path fill="#33C481" d="M30 30h12v8H30z"/>
      <rect x="30" y="6" width="12" height="8" fill="#33C481"/>
      <path fill="#107C41" d="M6 10h24v28H6z" opacity=".15"/>
      <path fill="#fff" d="m11 16 4 8-4 8h3l2.5-5.2L19 32h3l-4-8 4-8h-3l-2.5 5L14 16z"/>
    </svg>
  );
}
