import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Icon = {
  logo: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),

  check: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),

  arrowLeft: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  ),
  arrowRight: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),

  mail: (props: IconProps) => (
    <svg
      {...base}
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33317 3.3335H16.6665C17.5832 3.3335 18.3332 4.0835 18.3332 5.00016V15.0002C18.3332 15.9168 17.5832 16.6668 16.6665 16.6668H3.33317C2.4165 16.6668 1.6665 15.9168 1.6665 15.0002V5.00016C1.6665 4.0835 2.4165 3.3335 3.33317 3.3335Z"
        stroke="#9CA3AF"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3332 5L9.99984 10.8333L1.6665 5"
        stroke="#9CA3AF"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  phone: (props: IconProps) => (
    <svg
      {...base}
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3332 14.0999V16.5999C18.3341 16.832 18.2866 17.0617 18.1936 17.2744C18.1006 17.487 17.9643 17.6779 17.7933 17.8348C17.6222 17.9917 17.4203 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1117 9.32486 15.7083C7.31139 14.4288 5.60431 12.7217 4.32486 10.7083C2.91651 8.53426 2.04007 6.05908 1.76653 3.48325C1.7457 3.25281 1.77309 3.02055 1.84695 2.80127C1.9208 2.58199 2.03951 2.38049 2.1955 2.2096C2.3515 2.03871 2.54137 1.90218 2.75302 1.80869C2.96468 1.7152 3.19348 1.6668 3.42486 1.66658H5.92486C6.32928 1.6626 6.72136 1.80582 7.028 2.06953C7.33464 2.33324 7.53493 2.69946 7.59153 3.09992C7.69705 3.89997 7.89274 4.68552 8.17486 5.44158C8.28698 5.73985 8.31125 6.06401 8.24478 6.37565C8.17832 6.68729 8.02392 6.97334 7.79986 7.19992L6.74153 8.25825C7.92783 10.3445 9.65524 12.072 11.7415 13.2583L12.7999 12.1999C13.0264 11.9759 13.3125 11.8215 13.6241 11.755C13.9358 11.6885 14.2599 11.7128 14.5582 11.8249C15.3143 12.107 16.0998 12.3027 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6912 18.3332 14.0999Z"
        stroke="#9CA3AF"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  alert: (props: IconProps) => (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  ),

  lock: (props: IconProps) => (
    <svg {...base} {...props}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  password: (props: IconProps) => (
    <svg
      {...base}
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8333 9.1665H4.16667C3.24619 9.1665 2.5 9.9127 2.5 10.8332V16.6665C2.5 17.587 3.24619 18.3332 4.16667 18.3332H15.8333C16.7538 18.3332 17.5 17.587 17.5 16.6665V10.8332C17.5 9.9127 16.7538 9.1665 15.8333 9.1665Z"
        stroke="#9CA3AF"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.8335 9.1665V5.83317C5.8335 4.7281 6.27248 3.66829 7.05388 2.88689C7.83529 2.10549 8.89509 1.6665 10.0002 1.6665C11.1052 1.6665 12.165 2.10549 12.9464 2.88689C13.7278 3.66829 14.1668 4.7281 14.1668 5.83317V9.1665"
        stroke="#9CA3AF"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  eye: (props: IconProps) => (
    <svg
      {...base}
      {...props}
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_4899)">
        <path
          d="M0.666504 8.99984C0.666504 8.99984 3.33317 3.6665 7.99984 3.6665C12.6665 3.6665 15.3332 8.99984 15.3332 8.99984C15.3332 8.99984 12.6665 14.3332 7.99984 14.3332C3.33317 14.3332 0.666504 8.99984 0.666504 8.99984Z"
          stroke="#6B7280"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 11C9.10457 11 10 10.1046 10 9C10 7.89543 9.10457 7 8 7C6.89543 7 6 7.89543 6 9C6 10.1046 6.89543 11 8 11Z"
          stroke="#6B7280"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_4899">
          <rect width="16" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  chevronDown: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),

  google: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  ),

  apple: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16.37 1.43c0 1.14-.42 2.22-1.18 3.04-.8.86-2.1 1.53-3.27 1.43a3.6 3.6 0 0 1 1.21-2.93c.78-.83 2.1-1.46 3.24-1.54zM20.5 17.2c-.6 1.38-.88 2-1.66 3.21-1.09 1.7-2.62 3.81-4.52 3.83-1.69.01-2.12-1.1-4.41-1.09-2.29.01-2.77 1.11-4.45 1.1-1.9-.02-3.36-1.93-4.45-3.62C-1.5 16.34-1.82 9.92.85 6.5c.95-1.22 2.46-2 4.1-2 1.67 0 2.72 1.1 4.1 1.1 1.34 0 2.16-1.1 4.1-1.1 1.46 0 3 .8 4.1 2.17-3.6 1.97-3.01 7.1-.85 8.53z" />
    </svg>
  ),
};

export default Icon;
