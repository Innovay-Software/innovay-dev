export default function Logo({
  size,
  color1,
  color2,
  stroke,
  id,
}: {
  size: string
  color1: string
  color2: string
  stroke: number
  id: string
}) {
  const innerRadius = 6
  const outerRadius = innerRadius + stroke
  const padding = 2
  const startingX = 45 - outerRadius
  const startingY = outerRadius + padding
  const outestRadius = (100 - padding * 2 - stroke - innerRadius * 2) / 2
  const lowerPartHeight = 22
  const displayGrid = false
  const defaultColor1 = '4974e0'
  const defaultColor2 = '00e2d3'
  return (
    <svg
      // style={{ fill: "url(#my-cool-gradient) blue" }}
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
    >
      <linearGradient id={`${id}`} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop
          offset="0%"
          stopColor={`#${color1 == '' ? defaultColor1 : color1}`}
        ></stop>
        <stop
          offset="100%"
          stopColor={`#${color2 == '' ? defaultColor2 : color2}`}
        ></stop>
      </linearGradient>
      {displayGrid && (
        <g>
          <path d="M10,0 v0,100" stroke="red" width="1" fill="#00000000" />
          <path d="M20,0 v0,100" stroke="red" width="1" fill="#00000000" />
          <path d="M30,0 v0,100" stroke="red" width="1" fill="#00000000" />
          <path d="M40,0 v0,100" stroke="red" width="1" fill="#00000000" />
          <path d="M50,0 v0,100" stroke="red" width="1" fill="#00000000" />
          <path d="M60,0 v0,100" stroke="red" width="1" fill="#00000000" />
          <path d="M70,0 v0,100" stroke="red" width="1" fill="#00000000" />
          <path d="M80,0 v0,100" stroke="red" width="1" fill="#00000000" />
          <path d="M90,0 v0,100" stroke="red" width="1" fill="#00000000" />
          <path d="M0,10 h100" stroke="red" width="1" fill="#00000000" />
          <path d="M0,20 h100" stroke="red" width="1" fill="#00000000" />
          <path d="M0,30 h100" stroke="red" width="1" fill="#00000000" />
          <path d="M0,40 h100" stroke="red" width="1" fill="#00000000" />
          <path d="M0,50 h100" stroke="red" width="1" fill="#00000000" />
          <path d="M0,60 h100" stroke="red" width="1" fill="#00000000" />
          <path d="M0,70 h100" stroke="red" width="1" fill="#00000000" />
          <path d="M0,80 h100" stroke="red" width="1" fill="#00000000" />
          <path d="M0,90 h100" stroke="red" width="1" fill="#00000000" />
        </g>
      )}
      <g fill={`url(#${id})`}>
        {/* 
            TopCircle
            Inner radius = 7, Outer radius = 15, Center = (50,18)
            InnerTop = (50,11)
            InnerBottom = (50,25)
            OuterTop = (50,3) 
            OuterBottom = (50,33)
          */}
        <path
          d={`M0,0 M100,100 
                    M${startingX},${startingY}
                    a${outerRadius} ${outerRadius}  0 0 1 ${outerRadius * 2},0
                    a${outerRadius} ${outerRadius}  0 0 1 -${outerRadius * 2},0
                    h${stroke}
                    a${innerRadius} ${innerRadius} 0 0 0 ${innerRadius * 2},0
                    a${innerRadius} ${innerRadius} 0 0 0 -${innerRadius * 2},0
                    z
                  `}
          // stroke="black"
          // width="1"
        />
        {/* 
            BottomCircle
            Inner radius = 7, Outer radius = 15, Vertical Part Height = 26
            InnerTop = (50,49)
            InnerBottom = (50,89)
            OuterTop = (50,41) 
            OuterBottom = (50,97)
          */}
        <path
          d={`M0,0 M100,100 
                    M${startingX} ${100 - startingY}
                    a${outerRadius} ${outerRadius} 0 0 0 ${outerRadius * 2},0
                    v-${lowerPartHeight}
                    a${outerRadius} ${outerRadius} 0 0 0 -${outerRadius * 2},0
                    v${lowerPartHeight}
                    h${stroke}
                    v-${lowerPartHeight}
                    a${innerRadius} ${innerRadius} 0 0 1 ${innerRadius * 2},0
                    v${lowerPartHeight}
                    a${innerRadius} ${innerRadius} 0 0 1 -${innerRadius * 2},0
                    z
                  `}
          // stroke="black"
          // width="1"
        />

        <path
          d={`M0,0 M100,100 
                    M${startingX + outerRadius},${
            startingY + outerRadius - stroke
          }
                    a${outestRadius} ${outestRadius} 0 0 1 0,${outestRadius * 2}
                    v-${stroke}
                    a${outestRadius - stroke} ${
            outestRadius - stroke
          } 0 0 0 0,-${(outestRadius - stroke) * 2}
                    z
                  `}
          // stroke="black"
          // width="1"
        />
      </g>
    </svg>
  )
}
