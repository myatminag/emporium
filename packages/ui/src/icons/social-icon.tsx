import { SVGProps } from 'react';

export const MailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 5.25l-9 8.25-9-8.25"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 5.25h18V18a.75.75 0 01-.75.75H3.75A.75.75 0 013 18V5.25zM10.36 12l-7.126 6.534M20.766 18.534L13.64 12"
      ></path>
    </svg>
  );
};

export const MobileIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.944 3.75a7.51 7.51 0 015.306 5.306M14.166 6.647a4.49 4.49 0 013.187 3.187M8.672 11.7a7.837 7.837 0 003.656 3.647.749.749 0 00.74-.056l2.345-1.566a.74.74 0 01.712-.066l4.387 1.885a.74.74 0 01.45.778A4.5 4.5 0 0116.5 20.25 12.75 12.75 0 013.75 7.5a4.5 4.5 0 013.928-4.463.74.74 0 01.778.45l1.885 4.397a.75.75 0 01-.057.703L8.72 10.97a.75.75 0 00-.047.731v0z"
      ></path>
    </svg>
  );
};

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 8 19"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const TwitterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="h-4 w-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 17"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
