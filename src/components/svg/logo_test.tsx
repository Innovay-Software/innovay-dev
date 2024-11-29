export default function LogoTest({
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
          <stop offset="0%" stop-color="#ff0000"></stop>
          <stop offset="50%" stop-color="#224488"></stop>
          <stop offset="100%" stop-color="#0000ff"></stop>
        </linearGradient>
        <use xlinkHref="#icon-carpet"></use>
        <symbol id="icon-carpet" viewBox="0 0 100 100">
          <g fill="url(#my-cool-gradient)">
            <path d="M34 18v33.9c0 .3-.1.6-.3.8-.4.3-.8.3-1.2.3H5a1 1 0 0 1-1-1V8c0-.6.4-1 1-1h28c.6 0 1 .4 1 1v10zm3-18a1 1 0 0 0-1 1v2h-2V1a1 1 0 0 0-2 0v2h-2V1a1 1 0 0 0-2 0v2h-2V1a1 1 0 0 0-2 0v2h-2V1a1 1 0 0 0-2 0v2h-2V1a1 1 0 0 0-2 0v2h-2V1a1 1 0 0 0-2 0v2h-2V1a1 1 0 0 0-2 0v2H6V1a1 1 0 0 0-2 0v2H2V1a1 1 0 0 0-2 0v58a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0V1c0-.6-.4-1-1-1z"></path>
            {/* <path d="M8 16c0-.6.4-1 1-1h3v-3c0-.6.4-1 1-1h3V9H6v10h2v-3zM11 28.5l21 21V39h-3a1 1 0 0 1-1-1v-3h-3a1 1 0 0 1-1-1v-3h-3a1 1 0 0 1-1-1v-4c0-.6.4-1 1-1h3v-3c0-.6.4-1 1-1h3v-3c0-.6.4-1 1-1h3V9h-1.6L11 28.5z"></path>
            <path d="M30 22c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1h-3v2h3c.6 0 1 .4 1 1v3h3c.6 0 1 .4 1 1v3h2V19h-2v3zM27.6 9H18v3c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1H6v9.6l2.8-2.8L27.6 9zM16 45h-3a1 1 0 0 1-1-1v-3H9a1 1 0 0 1-1-1v-3H6v14h6v-3c0-.6.4-1 1-1h3v-2z"></path>
            <path d="M6 33.4V35h3c.6 0 1 .4 1 1v3h3c.6 0 1 .4 1 1v3h3c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-3v2h16.6L9.5 30 6 33.3z"></path> */}
            <polygon points="10,20 30,40 10,40" />
            {/* <polygon points="50,20 80,40 50,40" /> */}
            <path d="M0,0 M50,20 L80,40 h-30 z" />
          </g>
        </symbol>
      </svg>
    </>
  )
}
