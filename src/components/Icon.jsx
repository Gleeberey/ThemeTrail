function Icon({ name, className = '' }) {
  const icons = {
    pin: (
      <>
        <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    walk: (
      <>
        <circle cx="14" cy="4" r="2" />
        <path d="m7 21 4-7 4 3 1 4M8 12l2-5 4 1 3 4h3M10 7l1 7" />
      </>
    ),

    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,

    check: <path d="m5 12 4 4L19 6" />,

    history: (
      <>
        <path d="m3 9 9-6 9 6H3Zm2 11h14M6 9v8m6-8v8m6-8v8M3 21h18" />
      </>
    ),

    building: (
      <>
        <path d="M4 21V7h8v14m0-17h8v17M2 21h20M7 11h2m-2 4h2m6-7h2m-2 4h2m-2 4h2" />
      </>
    ),

    heritage: (
      <>
        <path d="m12 3 8 14H4L12 3Zm0 18L4 7h16l-8 14Z" />
      </>
    ),
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

export default Icon