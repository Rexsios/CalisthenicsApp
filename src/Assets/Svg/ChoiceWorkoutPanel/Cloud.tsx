import * as React from "react";
import "./Cloud.scss";

interface IDetailProps {
  className?: string;
}

const Cloud: React.FC<IDetailProps> = (props): any => {
  return (
    <svg viewBox="0 0 566.9 425.2" className={props.className}>
      <path
        d="M490.2 136.4c-14.6-2.2-28.9-.8-42 3.7-5.5-37.8-35-69.2-74.7-75.3-22.9-3.5-45.1 2-62.9 13.9-9.7-9.8-22.6-16.7-37.2-18.9-26.3-4-51.3 7.8-65.4 28.4-2-.4-4.1-.8-6.1-1.1-52-8-100.8 24-115.4 73-30.6 1.6-56.9 24.5-61.7 55.9-5.5 36.1 19.2 69.8 55.3 75.3 2.8.4 5.6.7 8.3.7-.2 1.2-.5 2.3-.6 3.5-5.5 36.1 19.2 69.8 55.3 75.3 27 4.2 52.8-8.7 66.3-30.6 13.2 22 35.6 38.1 62.9 42.3 26 4 51.1-3.7 70-19.2 4.8 1.6 9.8 2.9 15 3.7 42.3 6.5 82.2-17.9 96.8-56.3 3 .8 6.1 1.4 9.2 1.9 48.7 7.5 94.2-25.9 101.6-74.6 7.3-48.6-26.1-94.1-74.7-101.6z"
        fill="#20bf6b"
      />
      <path
        d="M468.2 116.6c-14.6-2.2-28.9-.8-42 3.7-5.5-37.8-35-69.2-74.7-75.3-22.9-3.5-45.1 2-62.9 13.9-9.7-9.8-22.6-16.7-37.2-18.9-26.3-4-51.3 7.8-65.4 28.4-2-.4-4.1-.8-6.1-1.1-52-8-100.8 24-115.4 73-30.6 1.6-56.9 24.5-61.7 55.9-5.5 36.1 19.2 69.8 55.3 75.3 2.8.4 5.6.7 8.3.7-.2 1.2-.5 2.3-.6 3.5-5.5 36.1 19.2 69.8 55.3 75.3 27 4.2 52.8-8.7 66.3-30.6 13.2 22 35.6 38.1 62.9 42.3 26 4 51.1-3.7 70-19.2 4.8 1.6 9.8 2.9 15 3.7 42.3 6.5 82.2-17.9 96.8-56.3 3 .8 6.1 1.4 9.2 1.9 48.7 7.5 94.2-25.9 101.6-74.6 7.3-48.6-26.1-94.1-74.7-101.6z"
        fill="#fff"
      />
      <foreignObject width="100%" height="100%">
        <div className="itemInSvg">
          <p>{props.children}</p>
        </div>
      </foreignObject>
    </svg>
  );
};

export default Cloud;
