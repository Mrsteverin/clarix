// Authentic brand SVG logos for channel cards.
// Each logo uses the official brand colors and renders inside a white rounded tile
// so trademark colors stay accurate regardless of theme.

type LogoProps = { className?: string };

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
  return (
    <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M22 6a16 16 0 1 0 0 32 16 16 0 0 0 0-32zm0 28a12 12 0 1 1 0-24 12 12 0 0 1 0 24z"/>
      <path fill="#34A853" d="m31.5 31.5 9 9a2.5 2.5 0 0 0 3.5-3.5l-9-9-3.5 3.5z"/>
      <path fill="#FBBC04" d="m17.5 14 4 4 4.5-4.5L19 6.5z"/>
      <path fill="#EA4335" d="M14 17.5 6.5 25l5 5 7.5-7.5z"/>
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
  return (
    <svg viewBox="0 0 36 36" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="meta-grad" x1="6" y1="28" x2="30" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0064E1"/>
          <stop offset=".4" stopColor="#0064E1"/>
          <stop offset=".83" stopColor="#0073EE"/>
          <stop offset="1" stopColor="#0082FB"/>
        </linearGradient>
        <linearGradient id="meta-grad2" x1="9" y1="22" x2="9" y2="13" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0082FB"/>
          <stop offset="1" stopColor="#0064E0"/>
        </linearGradient>
      </defs>
      <path fill="#0081FB" d="M6.9 22.4c0 1.4.3 2.5.7 3.2.6.9 1.5 1.3 2.4 1.3 1.2 0 2.3-.3 4.4-3.2 1.7-2.3 3.7-5.6 5-7.7l2.3-3.5c1.6-2.4 3.4-5.1 5.6-5.1 1.7 0 3.4.99 4.7 3.8C33.4 14.5 34 18.6 34 22.7c0 2.5-.5 4.3-1.3 5.7-.8 1.4-2.4 2.8-5 2.8v-3.9c2.2 0 2.8-2.1 2.8-4.4 0-3.4-.8-7.1-2.5-9.7-1.2-1.9-2.8-3-4.6-3-1.9 0-3.5 1.5-5.2 4-1 1.4-1.9 3-3 4.9l-1.4 2.4c-2.7 4.6-3.4 5.6-4.8 7.5-2.5 3.3-4.6 4.6-7.4 4.6-2.7 0-4.5-1.2-5.6-3-.9-1.5-1.4-3.4-1.4-5.7l4.3.5z"/>
      <path fill="url(#meta-grad2)" d="M6 11.4C7.2 9.5 9 8.2 11 8.2c1.2 0 2.4.4 3.6 1.3 1.3 1.1 2.7 2.8 4.5 5.6l.6 1c1.5 2.4 2.4 3.6 2.9 4.2-.6.7-1.4.5-1.8-.2l-.1-.1-.6-.9c-1.7-2.7-3-4.6-4.2-5.7-1.1-1-1.9-1.4-2.8-1.4-1.1 0-2 .8-2.7 1.7l-3.7-1.7L6 11.4z"/>
      <path fill="url(#meta-grad)" d="M11 8.2c-1.5 0-2.8.5-3.9 1.5C5.6 11.2 4 13.7 2.7 17 1 21 .8 24.6 1.6 27.6l3.9-1.5c-.4-1.4-.5-3.1.1-4.9 1.1-3.3 2.6-5.3 3.5-6.1.8-.7 1.7-1.1 2.5-1.1.9 0 1.7.4 2.6 1.3 1 1 2 2.5 3.4 4.7l1.4 2.3 2.4-3.7-.6-1c-1.8-2.8-3.2-4.5-4.5-5.6-1.2-.9-2.4-1.3-3.6-1.3z"/>
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

export function WooLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#7F54B3"/>
      <path fill="#fff" d="M8 16c0-1.1.9-2 2-2h28c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H22l-5 4 1-4h-8c-1.1 0-2-.9-2-2V16zm5 1.5l1.7 8 2.4-5.5 2.3 5.5 1.8-8h-1.6l-1 5-2.4-5.5-2.4 5.5-1-5h-1.5l.7 0zm12 4c0-1.5 1-3 3-3s3 1.5 3 3-1 3-3 3-3-1.5-3-3zm1.5 0c0 .8.5 1.5 1.5 1.5s1.5-.7 1.5-1.5-.5-1.5-1.5-1.5-1.5.7-1.5 1.5zm6.5 0c0-1.5 1-3 3-3s3 1.5 3 3-1 3-3 3-3-1.5-3-3zm1.5 0c0 .8.5 1.5 1.5 1.5s1.5-.7 1.5-1.5-.5-1.5-1.5-1.5-1.5.7-1.5 1.5z"/>
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
