import React from "react";

export default function Icon({ name }) {
  const icons = {
    search: (
      <path d="m20 20-4.3-4.3m2.3-5.2a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
    ),
    user: (
      <>
        <path d="M20 21a8 8 0 0 0-16 0" />
        <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      </>
    ),
    bag: (
      <>
        <path d="M6 8h12l-1 13H7L6 8Z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    left: <path d="M19 12H5m6-6-6 6 6 6" />,
    down: <path d="M12 5v14m0 0 5-5m-5 5-5-5" />,
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M16.5 7.5h.01" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
    facebook: (
      <path d="M14 8h2V5h-2.4C10.8 5 9 6.8 9 9.6V12H7v3h2v6h3v-6h2.4l.6-3H12V9.6c0-1 .6-1.6 2-1.6Z" />
    ),
    pinterest: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M10.2 19c.5-1.9 1-3.7 1.5-5.6" />
        <path d="M11.8 13.3c-.4.8-1.9.4-2.1-.8-.4-2.3 1.1-4.5 3.5-4.5 2.2 0 3.5 1.4 3.5 3.3 0 2.3-1.1 4.1-2.8 4.1-.9 0-1.6-.7-1.4-1.6l.5-1.9c.2-.8-.1-1.4-.8-1.4-.9 0-1.5.9-1.5 2 0 .7.2 1.2.6 1.6Z" />
      </>
    ),
    tiktok: (
      <>
        <path d="M14 4v10.2a3.8 3.8 0 1 1-3.8-3.8" />
        <path d="M14 4c.5 3.2 2.4 5.1 5.2 5.4" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      {icons[name]}
    </svg>
  );
}
