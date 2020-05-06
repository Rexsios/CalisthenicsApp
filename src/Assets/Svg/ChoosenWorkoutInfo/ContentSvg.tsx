import * as React from "react"

interface IDetailProps {
  ids: number
}

export const ContentSvg: React.FC<IDetailProps> = (props): any => {
  switch (props.ids) {
    case 1:
      return (
        <svg
          id="prefix__Warstwa_1"
          x={0}
          y={0}
          viewBox="0 0 1366 232"
          xmlSpace="preserve"
          {...props}
        >
          <style>{".prefix__st1{fill:#fff}"}</style>
          <linearGradient
            id="prefix__SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1={280.156}
            y1={-337.59}
            x2={1863.065}
            y2={1433.388}
          >
            <stop offset={0.007} stopColor="#f7a518" />
            <stop offset={0.789} stopColor="#7f3c00" />
          </linearGradient>
          <path
            d="M1364 233.1H195.2c-37.5 0-72.2-20-91-52.5L1 1.9h1174.6c41.6 0 79.8 23.1 99.1 60.1l89.3 171.1z"
            fill="url(#prefix__SVGID_1_)"
          />
          <path
            className="prefix__st1"
            d="M210.2 191.5c-6.5 0-12-1.5-16.6-4.7-4.6-3-7.9-7.1-10-12.4-2.2-5.2-3.3-11.3-3.3-18.4v-51.1c0-11 2.5-19.6 7.5-25.9 5-6.4 12.5-9.5 22.4-9.5 9.9 0 17.3 3.3 22.3 9.5 5 6.3 7.5 14.9 7.5 25.9V156c0 10.7-2.6 19.4-7.6 25.8-5.1 6.5-12.5 9.7-22.2 9.7zm0-14.1c8.5 0 12.8-7.1 12.8-21.4v-51.1c0-2.4-.1-4.6-.2-6.4-.2-1.9-.5-3.8-1.1-5.7-.6-1.9-1.3-3.6-2.2-4.9-.9-1.3-2.1-2.3-3.7-3.1-1.6-.8-3.4-1.2-5.5-1.2-2.2 0-4 .4-5.6 1.2-1.5.8-2.8 1.9-3.6 3.1-.9 1.3-1.7 3-2.3 4.9-.5 1.9-.9 3.8-1.1 5.7-.2 1.8-.3 4-.3 6.4V156c0 2.8.2 5.5.6 7.8.4 2.4 1.1 4.6 2 6.7.9 2.2 2.2 3.8 3.9 5 1.7 1.3 3.8 1.9 6.3 1.9zM263.5 190.2V96.4h-12.7V83.6c8.6-3.1 14.3-7.4 17-12.8h12.8v119.5h-17.1zM1222.9 73.8c2.8 0 5.1-2.3 5.1-5.1V58.4c0-8.5-6.9-15.4-15.4-15.4h-62.2c-8.5 0-15.4 6.9-15.4 15.4v31c-4.5-4.2-10.3-7.2-16.6-8.3 2.9-4 4.7-8.9 4.7-14.2 0-13.2-10.7-23.9-23.9-23.9s-23.9 10.7-23.9 23.9c0 5.3 1.7 10.2 4.7 14.2-15.2 2.7-26.9 16-26.9 32v37.6c0 8.5 6.9 15.4 15.4 15.4 1.8 0 3.5-.3 5.1-.9v37.5c0 8.5 6.9 15.4 15.4 15.4 3.9 0 7.5-1.5 10.3-3.9 2.7 2.4 6.3 3.9 10.3 3.9 8.5 0 15.4-6.9 15.4-15.4v-37.5c1.6.6 3.3.9 5.1.9s3.5-.3 5.1-.9v16.3c0 8.5 6.9 15.4 15.4 15.4h62.2c8.5 0 15.4-6.9 15.4-15.4v-10.3c0-2.8-2.3-5.1-5.1-5.1h-15.4V73.8h15.2zm-5.2-10.3h-10.3v-5.1c0-2.8 2.3-5.1 5.1-5.1s5.1 2.3 5.1 5.1v5.1zm-118.6-10.2c7.5 0 13.7 6.1 13.7 13.7s-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7 6.2-13.7 13.7-13.7zm30.8 102.5c-2.8 0-5.1-2.3-5.1-5.1v-36.5c0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1v88.5c0 2.8-2.3 5.1-5.1 5.1s-5.1-2.3-5.1-5.1v-51.3c0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1v51.3c0 2.8-2.3 5.1-5.1 5.1s-5.1-2.3-5.1-5.1v-88.4c0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1v36.5c0 2.8-2.3 5.1-5.1 5.1s-5.1-2.3-5.1-5.1v-37.6c0-12.3 10-22.2 22.2-22.2h27.3c12.3 0 22.2 10 22.2 22.2v37.6c-.3 2.7-2.6 5-5.4 5zm68.2 30.8h-47.7c-2.8 0-5.1-2.3-5.1-5.1v-123c0-2.8 2.3-5.1 5.1-5.1h47.7c-.6 1.6-.9 3.3-.9 5.1v123c0 1.7.3 3.5.9 5.1zm19.6-10.3v5.1c0 2.8-2.3 5.1-5.1 5.1s-5.1-2.3-5.1-5.1v-5.1h10.2z"
          />
          <path
            className="prefix__st1"
            d="M1181.9 63.5h-21.2c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1h21.2c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1zM1181.9 84h-21.2c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1h21.2c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1zM1181.9 104.5h-21.2c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1h21.2c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1zM1181.9 125h-21.2c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1h21.2c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1zM1181.9 145.5h-21.2c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1h21.2c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1zM1181.9 166h-21.2c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1h21.2c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1z"
          />
          <path fill="none" d="M327.7 98.6h657.1v117.6H327.7z" />
          <text
            transform="translate(367.488 165.27)"
            className="prefix__st1"
            letterSpacing={6}
            fontSize={100}
            fontFamily="Roboto"
            fontWeight={900}
          >
            {"WYKONANIE"}
          </text>
        </svg>
      )
    case 2:
      return (
        <svg
          id="XRayprefix__Warstwa_1"
          x={0}
          y={0}
          viewBox="0 0 1366 232"
          xmlSpace="preserve"
          {...props}
        >
          <style>
            {
              ".XRayprefix__st1{fill:#fff}.XRayprefix__st4{font-size:100px}.XRayprefix__st5{letter-spacing:6}"
            }
          </style>
          <linearGradient
            id="XRayprefix__SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1={1485.898}
            y1={-532.036}
            x2={-430.343}
            y2={1012.476}
          >
            <stop offset={0.007} stopColor="#186af7" />
            <stop offset={0.789} stopColor="#00437f" />
          </linearGradient>
          <path
            d="M.9 233.6h1171.4c37.6 0 72.4-20.1 91.2-52.6L1366.9 1.9H189.6c-41.7 0-80 23.2-99.3 60.2L.9 233.6z"
            fill="url(#XRayprefix__SVGID_1_)"
          />
          <path
            className="XRayprefix__st1"
            d="M1111 186.4c-5.9 0-11-1.5-15.1-4.2-4.2-2.8-7.2-6.7-9.2-11.3-1.9-4.7-2.9-10.3-2.9-16.7v-46.6c0-9.9 2.3-17.8 6.8-23.5 4.5-5.7 11.3-8.6 20.4-8.6 9 0 15.8 2.8 20.3 8.6 4.6 5.8 6.8 13.6 6.8 23.5v46.6c0 9.8-2.3 17.5-7 23.3-4.5 6-11.3 8.9-20.1 8.9zm0-12.8c7.7 0 11.5-6.5 11.5-19.4v-46.6c0-2.1 0-4.1-.1-5.8-.2-1.7-.5-3.5-1-5.2-.5-1.7-1.1-3.2-2-4.4-.8-1.2-2-2.2-3.4-2.9-1.4-.8-3.1-1.1-5-1.1-2 0-3.7.3-5.1 1.1-1.5.7-2.5 1.7-3.4 2.9-.9 1.1-1.5 2.6-2 4.4-.5 1.7-.9 3.5-1 5.2-.2 1.7-.2 3.7-.2 5.8v46.6c0 2.6.2 4.9.5 7 .3 2.2.9 4.2 1.8 6.1.9 1.9 2.1 3.5 3.7 4.6 1.5 1.2 3.4 1.7 5.7 1.7zM1148.3 185.3v-15.6l27.2-38.8c.2-.4 1-1.4 2.1-2.9s1.8-2.6 2.2-3.2c.3-.5 1-1.5 1.9-2.9.9-1.4 1.5-2.4 1.9-3.2.3-.8.8-1.8 1.4-3.2.6-1.4 1-2.6 1.3-3.7.2-1.1.5-2.3.7-3.8.2-1.4.3-2.9.3-4.3 0-4.3-1-8-3-11s-4.9-4.5-8.6-4.5c-2.2 0-4.1.6-5.7 1.6-1.5 1.2-2.8 2.7-3.6 4.5-.8 1.9-1.5 4-1.8 6.2-.4 2.2-.6 4.5-.6 7v4h-15.5v-4c0-10.1 2.1-18 6.5-23.7 4.4-5.6 11.2-8.4 20.7-8.4 8.9 0 15.5 2.4 20.2 7.4 4.6 4.9 6.9 11.9 6.9 20.8 0 3.4-.3 6.5-.9 9.3-.6 3-1.5 5.8-2.7 8.4-1.3 2.7-2.4 4.9-3.6 6.6-1.1 1.8-2.6 4-4.4 6.6l-27.2 35h38.8v15.6h-54.5z"
          />
          <g>
            <path
              className="XRayprefix__st1"
              d="M281.8 179.9l-1.9-39.1c-.2-4.4-3.6-8-7.9-8.6-15.2-1.9-27.3 5.8-35.2 13.2v-32.2c0-8.4-6.8-15.2-15.2-15.2h-57.1c-1.3-6.2-3.3-17.3-1.8-22.2 3.9-.9 7.1-3.3 9.3-5.3 4.4-4 8.2 5.2 16.7 1.7 3.2-1.3 5.7-4.2 6.2-8 1.6-10.5-.1-18.7-4.7-23.7-9.1-9.7-19.1-10.2-26-8.9-12.1 2.2-22 11.4-24.3 16.9-1.7 4.1-1.1 9.3-.2 12.9.2.8.1 1.7-.3 2.5-5.3 10.8-8.5 22.4-10.1 34.2h-1.9c-8.4 0-15.2 6.8-15.2 15.2v87.6c0 8.4 6.8 15.2 15.2 15.2h94.3c7.5 0 13.7-5.4 15-12.5 10.5-.8 20-1.8 27.6-2.7 10.2-1.3 18-10.5 17.5-21zM144.4 66.3c1-2 1.2-4.2.8-6.3-.9-3.9-.9-7.4 0-9.4 2.6-6.3 24.2-23.7 40.7-6.2 4.3 4.6 4.1 12.8 3.2 18.9-.5 3.1-3.8 4.8-6.5 3.4l-3.8-1.9c-3.5-1.8-7.9-1.2-10.8 1.5-6.1 5.6-8.5 2.9-10 5.6-2.7 4.9-1.9 14 .5 26.2H135c1.7-11.9 4.8-22.4 9.4-31.8zm-1.2 37.4h6.5c-1.1 13.9-2.4 43.9 6.1 55 2.5 3.3 1.8 5.5 0 9.5-.5 1.1-1.2 3.2-2.4 3.3-1 .1-2.1-1.1-2-1.1-7.4-12.3-8.3-52.1-8.2-66.7zm78.3 106.5h-94.3c-5.2 0-9.5-4.2-9.5-9.5v-87.6c0-5.2 4.2-9.5 9.5-9.5h1.3c-3.6 37.7 7.2 69.7 10.8 85 2.1 6.4 7.7 8.5 7.7 8.4 21.4 9.3 60.2 8.2 83.4 6.8-1.3 3.8-4.8 6.4-8.9 6.4zM231 181h-49c-1.6 0-2.9 1.3-2.9 2.8-.1 2.5-2.2 4.6-4.7 4.6-4.3 0-6.3-5.3-3.1-8.2 1.3-1.1 1.3-3.2 0-4.3-3.2-2.9-1.2-8.2 3.1-8.2 2.5 0 4.6 2.1 4.7 4.6 0 1.6 1.3 2.8 2.9 2.8h49v5.9zm0-29.4c-1.6 1.8-4.5 1.7-6-.2-3.7-4.9-8.2-8.3-13.2-10.3-1.5-.6-3.2.2-3.7 1.6-.6 1.5.2 3.2 1.6 3.7 4 1.6 7.7 4.4 10.7 8.4 2.6 3.3 6.8 4.5 10.6 3.3v11.2h-46.6c-1.3-4.3-5.3-7.4-10-7.4-8.3 0-13.3 9.2-8.8 16.1-4.4 6.9.5 16.1 8.8 16.1 4.7 0 8.7-3.1 10-7.4H231V198c-21.8 1.4-54.4 2.3-75.2-3.9-6.1-1.8-9.6-3.1-10.9-7.2-8-24.7-13.1-56.5-10.5-83.2h3c0 15.9.8 56 9.2 69.7 1.4 2.3 4.3 4.1 7.3 3.9 1.7-.1 4.8-1 6.8-5.7 2-4.9 4.6-10-.3-16.4-7.2-9.5-5.9-39.6-4.9-51.5h4.2c3.4 16 8.4 34.5 8.5 46.2.1 4.8 5.7 7.3 9.3 4.1 3.6-3.2 7.5-5.6 11.7-7.1 1.5-.6 2.3-2.2 1.7-3.7-.6-1.5-2.2-2.3-3.7-1.7-4.7 1.7-9.2 4.4-13.2 8-.3-12.2-5-30.1-8.4-45.8h55.9c5.2 0 9.5 4.2 9.5 9.5v38.4zm32.4 43.5c-6.7.8-16.1 1.8-26.6 2.6v-43.9c13.1-15 25.9-16.9 34.4-15.8 1.6.2 2.8 1.5 2.9 3.1l1.9 39.1c.4 7.4-5.1 14-12.6 14.9z"
            />
            <circle className="XRayprefix__st1" cx={199.3} cy={142.3} r={2.9} />
          </g>
          <path fill="none" d="M331.7 49h657.1v192.2H331.7z" />
          <text transform="translate(448.948 115.7)" fontFamily="Roboto" fontWeight={900}>
            <tspan x={0} y={0} className="XRayprefix__st1 XRayprefix__st4 XRayprefix__st5">
              {"RENTGEN"}
            </tspan>
            <tspan x={-70.6} y={80} className="XRayprefix__st1 XRayprefix__st4 XRayprefix__st5">
              {"ĆWICZENIA"}
            </tspan>
          </text>
        </svg>
      )
    case 3:
      return (
        <svg
          id="Goalprefix__Warstwa_1"
          x={0}
          y={0}
          viewBox="0 0 1366 232"
          xmlSpace="preserve"
          {...props}
        >
          <style>{".Goalprefix__st1{fill:#fff}.Goalprefix__st2{fill:none}"}</style>
          <linearGradient
            id="Goalprefix__SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1={136.853}
            y1={-376.875}
            x2={1670.891}
            y2={1000.094}
          >
            <stop offset={0.007} stopColor="#f72318" />
            <stop offset={0.789} stopColor="#7f000e" />
          </linearGradient>
          <path
            d="M1365.4 232.4H194c-37.6 0-72.4-20.1-91.2-52.6L-.6.7h1177.2c41.7 0 80 23.2 99.3 60.2l89.5 171.5z"
            fill="url(#Goalprefix__SVGID_1_)"
          />
          <path
            className="Goalprefix__st1"
            d="M206.2 200.7c-6.3 0-11.7-1.5-16.1-4.5-4.4-2.9-7.7-7-9.8-12-2-5.1-3.1-11-3.1-17.8v-49.7c0-10.6 2.4-18.9 7.1-25 4.9-6.1 12.2-9.2 21.9-9.2 9.6 0 16.8 3.1 21.6 9.2 4.9 6.1 7.4 14.5 7.4 25v49.7c0 10.4-2.5 18.7-7.5 24.9-4.9 6.3-12.1 9.4-21.5 9.4zm0-13.6c8.2 0 12.4-6.9 12.4-20.8v-49.7c0-2.3-.1-4.3-.2-6.1-.2-1.9-.5-3.7-1.1-5.6-.6-1.9-1.3-3.4-2.2-4.7-.8-1.2-2-2.3-3.5-3.1-1.5-.8-3.3-1.1-5.3-1.1-2.1 0-3.9.3-5.4 1.1-1.5.8-2.8 1.9-3.6 3.1-.9 1.2-1.6 2.8-2.1 4.7-.6 1.9-.9 3.8-1.1 5.6-.2 1.8-.2 3.8-.2 6.1v49.7c0 2.7.1 5.3.5 7.5s1 4.5 1.8 6.4c.9 2.2 2.2 3.8 3.9 5 1.6 1.3 3.7 1.9 6.1 1.9zM275.4 200.7c-9.4 0-16.5-2.7-21.6-8-4.9-5.2-7.4-12.6-7.4-22.2v-4.1H263c0 2.6 0 4.8.2 6.7.2 1.8.5 3.7 1 5.6.5 2 1.2 3.5 2 4.6.9 1.1 2.1 2.1 3.6 2.8 1.6.8 3.5 1.2 5.6 1.2 2.1 0 4-.4 5.5-1.2 1.5-.7 2.8-1.7 3.7-2.8.8-1.1 1.5-2.6 2-4.6.5-1.9.8-3.8 1-5.6.2-1.9.2-4.1.2-6.7 0-6.5-1.3-11.7-3.8-15.3-2.6-3.5-6.8-5.3-12.7-5.3v-16.6c6 0 10.3-1.2 12.8-3.7s3.8-6.8 3.8-12.9c0-5.4-.9-9.6-2.8-12.3-1.8-2.8-5-4.2-9.7-4.2-2.1 0-4 .3-5.6 1.1-1.5.7-2.7 1.7-3.6 2.8-.8 1.2-1.5 2.7-2 4.7-.5 1.8-.8 3.7-1 5.5-.2 1.9-.2 4-.2 6.6h-16.6v-4.1c0-9.4 2.5-16.7 7.5-22.1 4.9-5.3 12.1-7.9 21.5-7.9s16.6 2.6 21.5 7.9c4.9 5.3 7.4 12.7 7.4 22.2 0 6.6-1.4 11.9-4.4 16.1-2.9 4.3-7 7.2-12.1 8.8 5.3 1.8 9.5 5.1 12.4 10.1 2.8 5 4.1 11.2 4.1 18.8 0 10.9-2.3 19.3-6.9 25.3-4.7 5.9-12 8.8-22 8.8z"
          />
          <g>
            <path
              className="Goalprefix__st2"
              d="M1156 56.7c25.4-.4 48 12.4 61.1 32.1l3.6-2.2c-13.9-20.9-37.8-34.6-64.7-34.2-42 .7-75.6 35.4-74.9 77.4.7 42 35.4 75.6 77.4 74.9 42-.7 75.6-35.4 74.9-77.4-.2-12.5-3.4-24.2-9-34.6l-3.6 2.2c5.1 9.7 8.1 20.7 8.3 32.5.6 39.7-31 72.4-70.8 73.1-39.7.6-72.4-31.1-73.1-70.8-.6-39.7 31.1-72.4 70.8-73z"
            />
            <path
              className="Goalprefix__st1"
              d="M1155.9 52.4c26.9-.4 50.9 13.3 64.7 34.2l3.8-2.3c-14.7-22.3-40.1-36.8-68.6-36.4-44.5.7-80 37.5-79.3 81.9.7 44.5 37.5 80 81.9 79.3 44.5-.7 80-37.5 79.3-81.9-.2-13.3-3.7-25.8-9.6-36.8l-3.8 2.3c5.5 10.3 8.8 22.1 9 34.6.7 42-32.9 76.7-74.9 77.4-42 .7-76.7-32.9-77.4-74.9-.7-42 32.9-76.7 74.9-77.4z"
            />
            <path
              className="Goalprefix__st2"
              d="M1156.3 74.6c18.8-.3 35.5 9.1 45.4 23.5l15.4-9.3c-13.1-19.7-35.6-32.6-61.1-32.1-39.7.6-71.4 33.4-70.8 73.1.6 39.7 33.4 71.4 73.1 70.8 39.7-.6 71.4-33.4 70.8-73.1-.2-11.7-3.2-22.8-8.3-32.5l-15.5 9.3c3.6 7.1 5.7 15 5.8 23.4.5 29.8-23.3 54.3-53.1 54.8s-54.3-23.3-54.8-53.1c-.5-29.7 23.3-54.3 53.1-54.8z"
            />
            <path
              className="Goalprefix__st1"
              d="M1156.6 92.6c12.2-.2 23 5.7 29.6 14.8l15.4-9.3c-9.9-14.4-26.6-23.8-45.4-23.5-29.8.5-53.5 25-53.1 54.8.5 29.8 25 53.6 54.8 53.1 29.8-.5 53.6-25 53.1-54.8-.1-8.4-2.3-16.4-5.8-23.4l-15.4 9.3c2 4.4 3.2 9.2 3.3 14.4.3 19.9-15.5 36.2-35.4 36.5-19.9.3-36.2-15.5-36.5-35.4-.3-19.8 15.5-36.2 35.4-36.5z"
            />
            <path
              className="Goalprefix__st2"
              d="M1156.9 110.6c5.5-.1 10.5 2.3 13.9 6.2l15.5-9.4c-6.7-9.1-17.5-15-29.6-14.8-19.9.3-35.7 16.7-35.4 36.5.3 19.9 16.7 35.7 36.5 35.4 19.9-.3 35.7-16.7 35.4-36.5-.1-5.1-1.3-10-3.3-14.4l-15.6 9.4c.5 1.7.8 3.4.9 5.2.2 9.9-7.8 18.1-17.7 18.3-9.9.2-18.1-7.8-18.3-17.7-.2-9.9 7.7-18 17.7-18.2z"
            />
            <path
              className="Goalprefix__st1"
              d="M1159.5 123.6l11.2-6.8c-3.4-3.9-8.3-6.3-13.9-6.2-9.9.2-17.8 8.3-17.7 18.3.2 9.9 8.3 17.9 18.3 17.7 9.9-.2 17.9-8.3 17.7-18.3 0-1.8-.3-3.6-.9-5.2l-11.5 6.9c-1.5.9-3.3.4-4.3-1l-.2-.3c-1-1.7-.5-4.1 1.3-5.1z"
            />
            <path
              className="Goalprefix__st1"
              d="M1260.4 83.2c.7.4 1.6.4 2.3-.1l2.4-1.4c.4-.2.6-.6.6-1s-.2-.8-.6-1l-11-5.8 1.2-.7c.3-.2.5-.4.5-.7.1-.3 0-.6-.1-.9l-1.5-2.5c-.3-.5-1-.7-1.6-.4l-1.3.8-.3-12.3c0-.4-.2-.8-.6-1-.4-.2-.8-.2-1.2 0l-2.4 1.4c-.7.4-1.1 1.2-1.1 2l.3 12.9-.6.4-.3-12.3c0-.4-.2-.8-.6-1-.4-.2-.8-.2-1.2 0l-2.4 1.4c-.7.4-1.1 1.2-1.1 2l.3 12.9-.6.4-.3-12.3c0-.4-.2-.8-.6-1-.4-.2-.8-.2-1.2 0l-2.4 1.4c-.7.4-1.1 1.2-1.1 2l.2 11c0 .4-.2.8-.6 1l-9.2 5.6-3.8 2.3-3.6 2.2-15.4 9.3-15.4 9.3-15.5 9.4-11.2 6.8c-1.8 1.1-2.3 3.4-1.2 5.2l.2.3c.9 1.4 2.8 1.9 4.3 1l11.5-6.9 15.6-9.4 15.4-9.3 15.5-9.3 3.6-2.2 3.8-2.3 9.2-5.6c.3-.2.8-.2 1.1 0l10.2 5.4c.7.4 1.6.4 2.3-.1l2.4-1.4c.4-.2.6-.6.6-1s-.3-.8-.6-1l-11-5.8.6-.4 11.6 6.1c.7.4 1.6.4 2.3-.1l2.4-1.4c.4-.2.6-.6.6-1s-.3-.8-.6-1l-11-5.8.6-.4 11.6 6.3z"
            />
          </g>
          <path className="Goalprefix__st2" d="M323.7 106h657.1v192.2H323.7z" />
          <text
            transform="translate(540.744 172.7)"
            className="Goalprefix__st1"
            letterSpacing={6}
            fontSize={100}
            fontFamily="Roboto"
            fontWeight={900}
          >
            {"CELE"}
          </text>
        </svg>
      )
    case 4:
      return (
        <svg
          id="ImprovingPrefix__Warstwa_1"
          x={0}
          y={0}
          viewBox="0 0 1366 232"
          xmlSpace="preserve"
          {...props}
        >
          <style>{".ImprovingPrefix__st1{fill:#fff}"}</style>
          <linearGradient
            id="ImprovingPrefix__SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1={1455.251}
            y1={-523.354}
            x2={-591.88}
            y2={1162.52}
          >
            <stop offset={0.007} stopColor="#ce18f7" />
            <stop offset={0.789} stopColor="#53007f" />
          </linearGradient>
          <path
            d="M-.3 232.1h1171.4c37.6 0 72.4-20.1 91.2-52.6L1365.7.4H188.5c-41.7 0-80 23.2-99.3 60.2L-.3 232.1z"
            fill="url(#ImprovingPrefix__SVGID_1_)"
          />
          <path
            className="ImprovingPrefix__st1"
            d="M1085.3 187.6c-6 0-11.2-1.3-15.5-4.2-4.3-2.9-7.4-6.7-9.4-11.6-2.1-4.9-3.1-10.5-3.1-17.1v-47.9c0-10.3 2.4-18.4 7-24.2 4.6-5.9 11.6-8.8 20.9-8.8 9.2 0 16.2 2.9 20.8 8.8 4.7 5.9 7 13.9 7 24.1v47.9c0 10-2.4 18-7.2 24-4.5 6.1-11.5 9-20.5 9zm0-13c8 0 12-6.7 12-19.9v-47.9c0-2.2-.1-4.2-.3-5.9-.1-1.9-.5-3.7-1-5.4-.5-1.8-1.2-3.3-2-4.5-.9-1.3-2-2.2-3.4-2.9-1.5-.8-3.2-1.1-5.2-1.1s-3.7.3-5.2 1.1c-1.4.7-2.6 1.6-3.4 2.9-.9 1.2-1.6 2.7-2.1 4.5-.5 1.8-.9 3.6-.9 5.4-.3 1.7-.3 3.7-.3 5.9v47.9c0 2.7.2 5 .6 7.3.3 2.2.9 4.3 1.7 6.2.9 1.9 2.1 3.5 3.7 4.7 1.5 1.1 3.5 1.7 5.8 1.7zM1156.2 186.6v-28.7h-31.9v-17.7l27.9-65.3h19.9v67.9h12.3v15.1h-12.3v28.7h-15.9zm-16-43.8h16v-48l-16 48z"
          />
          <g>
            <path
              className="ImprovingPrefix__st1"
              d="M222.5 44.1l-8.8-7.8 8.8-7.8c1.4-1.2 1.8-3.1 1.2-4.8-.6-1.7-2.2-2.8-4.1-2.8h-36.5v-1.6c0-1.7-1.4-3-3-3-1.7 0-3 1.4-3 3v40.9l-24.9 13.5c-.1-1.1-.5-2.2-1-3.2l-3.5-6.8c-2.4-4.7-8.2-6.6-12.9-4.2l-2.7 1.4c-2.3 1.2-4 3.1-4.7 5.6-.8 2.4-.6 5 .6 7.3l3.5 6.8c.8 1.6 2 2.9 3.5 3.7-1.9 2.5-2.7 5.6-3.7 8.8l-.7 2.3c-.5 1.6.5 3.3 2.1 3.7.3.1.6.1.8.1 1.3 0 2.5-.9 2.9-2.2l.7-2.3c1.3-4.7 2.1-7.2 4.7-8.6l4.7-2.5.6-.3.6-.3 33.2-18c-.2 4.1-2.4 8.1-6.1 10.3L153 88.5h-.1l-6.7 4.1c-1.4.9-1.9 2.7-1 4.2.8 1.3 2.5 1.8 3.9 1.2l-5.1 15.4-3.7 1.5-10.1 4.1 2.9-10.3c.5-1.6-.5-3.3-2.1-3.7-1.6-.5-3.3.5-3.7 2.1l-4.6 16.3c-.1.2-.1.4-.1.7l-1.2 22.2c0 .8.1 2.4-.2 3.3l-13.4 28.2H98c-5.7 0-10.3 4.6-10.3 10.3v8.7c-1.3-.6-2.8-.9-4.3-.9H58.6c-5.7 0-10.3 4.6-10.3 10.3V217H41c-1.7 0-3 1.4-3 3 0 1.7 1.4 3 3 3h178.6c1.7 0 3-1.4 3-3 0-1.7-1.4-3-3-3h-7.9v-78.1c0-5.7-4.6-10.3-10.3-10.3h-18.3V75.7c3.4-4.6 4.6-10.5 3-16.2-.2-.9-.9-1.6-1.7-2-.4-.2-.9-.3-1.3-.2v-5.5h36.5c1.8 0 3.4-1.1 4.1-2.8.7-1.8.2-3.7-1.2-4.9zm-89.4 24.3c.3-.9.9-1.6 1.7-2l2.7-1.4c.5-.3 1.1-.4 1.6-.4 1.3 0 2.5.7 3.1 1.9l3.5 6.8c.8 1.6.3 3.5-1.2 4.5l-1 .5-2.1 1.1c-1.7.9-3.8.2-4.7-1.5l-3.5-6.8c-.3-.9-.4-1.9-.1-2.7zM127 178.5c-1-.5-2.1-.8-3.3-.9l3.3-4.4v5.3zm14.4-24.4c1.5-1.7 1.9-3.8 2.2-5.4.1-.4 1.6-8.6 1.6-8.6s1.4.9 1.6.9c.1 0 .2.1.2.3l1.6 16.8h-10.2l3-4zm17.9-16.7l-2.6 20.7h-2.1l-1.7-17.3c-.2-2.2-1.6-4.2-3.6-5.1l-3-1.9 2-11.2s8.5 10.2 8.7 10.4c1.9 2.2 2.5 3.1 2.3 4.4zm-32.7 14.7c.6-1.8.9-3.7.8-5.6l1.1-20.2 14-5.7-2.5 14.1v.1l-2.1 11.7c-.3 1.2-.5 3-1.3 4l-20.5 27.2h-1.7l12.2-25.6zm-72.2 54c0-2.4 1.9-4.3 4.3-4.3h24.7c2.4 0 4.3 1.9 4.3 4.3V217H54.4v-10.9zm39.3 0v-18.2c0-2.4 1.9-4.3 4.3-4.3h24.7c2.4 0 4.3 1.9 4.3 4.3v29H93.7v-10.8zm112-67.2V217h-33.3v-18.2c0-1.7-1.4-3-3-3-1.7 0-3 1.4-3 3V217h-33.3v-48.5c0-2.4 1.9-4.3 4.3-4.3h24.7c2.4 0 4.3 1.9 4.3 4.3v15.2c0 1.7 1.4 3 3 3 1.7 0 3-1.4 3-3v-44.8c0-2.4 1.9-4.3 4.3-4.3h24.6c2.5 0 4.4 1.9 4.4 4.3zm-29-10.4c-5.7 0-10.3 4.6-10.3 10.3V159c-1.1-.5-2.3-.8-3.5-.9l2.5-20c.5-3.9-1.5-6.5-3.4-9-.2-.3-12-14.2-12-14.2l7.2-21.8L177 81v47.5h-.3zm6.4-82.8V27h32l-6.9 6.1c-.9.8-1.5 2-1.5 3.3 0 1.3.5 2.4 1.5 3.3l6.9 6.1-32-.1z"
            />
          </g>
          <path fill="none" d="M235 102h795.9v192.2H235z" />
          <text
            transform="translate(265.052 168.7)"
            className="ImprovingPrefix__st1"
            letterSpacing={2}
            fontSize={100}
            fontFamily="Roboto"
            fontWeight={900}
          >
            {"DOSKONALENIE"}
          </text>
        </svg>
      )
  }
}
