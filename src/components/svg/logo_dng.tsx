export default function LogoDng({
  foregroundColor,
  width,
  height,
}: {
  foregroundColor: string
  width: string
  height: string
}) {
  return (
    <>
      <svg
        style={{ fill: 'url(#my-cool-gradient) blue' }}
        aria-hidden="true"
        focusable="false"
        width={width}
        height={height}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <linearGradient id="my-cool-gradient" x2="1" y2="1">
          <stop offset="30%" stop-color="#ff0000"></stop>
          <stop offset="50%" stop-color="#224488"></stop>
          <stop offset="70%" stop-color="#0000ff"></stop>
        </linearGradient>
        <use xlinkHref="#icon-carpet"></use>
        <symbol id="icon-carpet" viewBox="0 0 100 100">
          <g fill="url(#my-cool-gradient)">
            <path d="M0,0 M100,100 M41,10 l30,12 l0,12 l-30,-12 L41,10" />
            <path d="M0,0 M100,100 M41,10 l0,52 l4,1.6 l0,-52 L41,10" />
            <path d="M0,0 M100,100 M48,12.8 l0,52 l4,1.6 l0,-52 L48,12.8" />
            <path d="M0,0 M100,100 M55,15.6 l0,52 l4,1.6 l0,-52 L55,15.6" />
            <path d="M0,0 M100,100 M62,18.4 l0,36 l9,-3.6 l0,-28 L62,18.4" />
            <path d="M0,0 M100,100 M71,50.8 l12,4.8 l0,33 l-12,0 L71,50.8" />
            <path d="M0,0 M100,100 M41,60 l48,19.2 l0,4 l-48,-19.2 L41,60" />
            <path d="M0,0 M100,100 M59,67.2 l24,9.6 l0,12.2 l-24,0 L59,67.2" />

            {/* <!-- Starting coord: (41-4.1, 18) => (36.9, 18) -->
    <!-- bottom y: 89 -->
    <!-- window size: 5--> */}
            <path d="M0,0 M100,100 M39,66 l17,6.8 l0,16.2 l-12,0 l0,-16.2 l-10,0 l0,16.2 l-12,0 l0-16.2 L39,66" />
            <path d="M0,0 M100,100 M38,72 l0,17 l2,0 l0,-17 L38,72" />
            <path d="M0,0 M100,100 M32,77 l14,0 l0,2 l-14,0 L32,77" />
            <path d="M0,0 M100,100 M32,83 l14,0 l0,6 l-14,0 L32,83" />

            {/* <!-- Starting coord: (41-4.1, 18) => (36.9, 18) --> */}
            <path d="M0,0 M100,100 M38,15.5 l-8,3.2 l0,24 l-8,3.2 l0,20 l-8,3.2 l0,4 l8,-3.2 l16,-6.4 L38,15.5" />
          </g>
        </symbol>
      </svg>
    </>
  )
}
