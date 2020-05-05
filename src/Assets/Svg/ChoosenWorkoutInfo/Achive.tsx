import * as React from "react"

interface IDetetailProps {
  reachedLvl: boolean
  className?:string
}

export const Achive: React.FC<IDetetailProps> = (props): any => {
  if (props.reachedLvl) {
    return (
      <svg viewBox="0 0 683 232" className={props.className}>
        <linearGradient
          id="Achiveprefix__a"
          gradientUnits="userSpaceOnUse"
          x1={101.06}
          y1={-103.637}
          x2={585.871}
          y2={331.535}
        >
          <stop offset={0.364} stopColor="#76bf27" />
          <stop offset={0.789} stopColor="#20bf8d" />
        </linearGradient>
        <path
          d="M194.6 228.8c-36.4 0-70.4-19.6-88.6-51.1L5.2 3.2h489c40.8 0 77.8 22.4 96.6 58.6L678 228.9H194.6z"
          fill="url(#Achiveprefix__a)"
        />
        <path
          d="M494.2 6.2c19.4 0 38.4 5.3 55 15.4 16.6 10 30.1 24.4 39 41.6l84.9 162.7H194.6c-35.4 0-68.3-19-86-49.6L10.4 6.2h483.8m0-6H0l103.4 179.1c18.8 32.6 53.6 52.6 91.2 52.6H683L593.5 60.3C574.2 23.4 535.9.2 494.2.2z"
          fill="#73049f"
        />
        <text
          transform="matrix(.7157 1.1981 -.8585 .5129 49.873 32.055)"
          letterSpacing={10.7}
          fontSize={55}
          fontFamily="Impact"
          opacity={0.9}
          fill="#fff"
        >
          {"KROK"}
        </text>
        <g opacity={0.8}>
          <path
            d="M493.2 23c-4.8-4.8-12.6-4.8-17.4 0L328.2 170.7l-56.8-56.8c-4.8-4.8-12.6-4.8-17.4 0-4.8 4.8-4.8 12.6 0 17.4l65.5 65.5c4.8 4.8 12.6 4.8 17.4 0L493.2 40.5c4.9-4.8 4.8-12.6 0-17.5z"
            fill="#fff"
          />
        </g>
      </svg>
    )
  } else {
    return (
      <svg viewBox="0 0 683 232" className={props.className}>
        <linearGradient
          id="Achiveprefix__a"
          gradientUnits="userSpaceOnUse"
          x1={101.06}
          y1={-103.637}
          x2={585.871}
          y2={331.535}
        >
          <stop offset={0.364} stopColor="#f72318" />
          <stop offset={0.789} stopColor="#7f000e" />
        </linearGradient>
        <path
          d="M194.6 228.8c-36.4 0-70.4-19.6-88.6-51.1L5.2 3.2h489c40.8 0 77.8 22.4 96.6 58.6L678 228.9H194.6z"
          fill="url(#Achiveprefix__a)"
        />
        <path
          d="M494.2 6.2c19.4 0 38.4 5.3 55 15.4 16.6 10 30.1 24.4 39 41.6l84.9 162.7H194.6c-35.4 0-68.3-19-86-49.6L10.4 6.2h483.8m0-6H0l103.4 179.1c18.8 32.6 53.6 52.6 91.2 52.6H683L593.5 60.3C574.2 23.4 535.9.2 494.2.2z"
          fill="#73049f"
        />
        <g opacity={0.9}>
          <path
            d="M394.9 114.9l78.6-78.6c2.8-2.8 2.8-7.3 0-10-2.8-2.8-7.3-2.8-10 0l-78.6 78.6-78.6-78.6c-2.8-2.8-7.3-2.8-10 0s-2.8 7.3 0 10l78.6 78.6-78.6 78.6c-2.8 2.8-2.8 7.3 0 10 1.4 1.4 3.2 2.1 5 2.1 1.8 0 3.6-.7 5-2.1l78.6-78.6 78.6 78.6c1.4 1.4 3.2 2.1 5 2.1 1.8 0 3.6-.7 5-2.1 2.8-2.8 2.8-7.3 0-10l-78.6-78.6z"
            fill="#fff"
          />
        </g>
        <text
          transform="matrix(.7157 1.1981 -.8585 .5129 49.925 32.056)"
          letterSpacing={10.7}
          fontSize={55}
          fontFamily="Impact"
          opacity={0.9}
          fill="#fff"
        >
          {"KROK"}
        </text>
      </svg>
    )
  }
}
