import { memo } from "react";
import { LoaderType } from "./Loader.types";

const LoaderComponent = ({}: LoaderType) => {
  return (
    <svg width="185" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)">
        <path
          d="M16.365 38.59c-2.693.294-4.44 1.661-5.828 2.777-1.115.862-1.789 1.367-2.672 1.473-2 .231-4.314-1.684-5.892-3.325L.5 38v8.543c2.714 1.978 5.408 2.82 8.059 2.525 2.693-.316 4.44-1.683 5.829-2.778 1.115-.883 1.788-1.367 2.672-1.472 1.999-.232 4.313 1.683 5.892 3.324l1.43 1.473v-8.543c-2.693-1.957-5.386-2.799-8.017-2.483Z"
          fill="#F82A42"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m71.55 18.808-4.242 4.242 4.95 4.95-4.95 4.95 4.242 4.242 4.95-4.95 4.95 4.95 4.242-4.242-4.95-4.95 4.95-4.95-4.242-4.242-4.95 4.95-4.95-4.95Z"
        fill="#FFB700"
      />
      <path d="M149.028 19H131.5v17.528h17.528V19Z" fill="#196CFF" />
      <path d="m44.5 34-10 10 10 10 10-10-10-10Z" fill="#EB6E28" />
      <path
        d="M117.385 11.943a8.935 8.935 0 0 1-8.942 8.942 8.935 8.935 0 0 1-8.943-8.942A8.935 8.935 0 0 1 108.443 3a8.935 8.935 0 0 1 8.942 8.943Z"
        fill="#00AB58"
      />
      <path d="M162.5 52.5h20l-10-18-10 18Z" fill="#A81AF4" />
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(.5 32)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Loader = memo(LoaderComponent);
