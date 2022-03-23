import { memo, ReactNode } from "react";
import { ShapeType } from "./Shape.types";

const svgs: { [key: number]: ReactNode } = {
  0: (
    <path
      d="M15.865 6.59c-2.693.294-4.44 1.661-5.828 2.777-1.115.862-1.789 1.367-2.672 1.473-2 .231-4.314-1.684-5.892-3.325L0 6v8.543c2.714 1.978 5.408 2.82 8.059 2.525 2.693-.316 4.44-1.683 5.829-2.778 1.115-.883 1.788-1.367 2.672-1.472 1.999-.232 4.313 1.683 5.892 3.324l1.43 1.473V9.072c-2.693-1.957-5.386-2.798-8.017-2.483Z"
      fill="#F82A42"
    />
  ),
  1: <path d="M12 2 2 12l10 10 10-10L12 2Z" fill="#EB6E28" />,
  2: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.05 2.808 2.808 7.05 7.758 12l-4.95 4.95 4.242 4.242 4.95-4.95 4.95 4.95 4.242-4.242-4.95-4.95 4.95-4.95-4.242-4.242L12 7.758l-4.95-4.95Z"
      fill="#FFB700"
    />
  ),
  3: (
    <path
      d="M20.885 11.943a8.935 8.935 0 0 1-8.942 8.942A8.935 8.935 0 0 1 3 11.943 8.935 8.935 0 0 1 11.943 3a8.935 8.935 0 0 1 8.942 8.943Z"
      fill="#00AB58"
    />
  ),
  4: <path d="M20.528 3H3v17.528h17.528V3Z" fill="#196CFF" />,
  5: <path d="M2 20.5h20l-10-18-10 18Z" fill="#A81AF4" />,
};

const ShapeComponent = ({ category, className }: ShapeType) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {svgs[category]}
    </svg>
  );
};

export const Shape = memo(ShapeComponent);
