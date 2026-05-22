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
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      {icons[name]}
    </svg>
  );
}
