export default function PageImageBgTitle({ title }: { title: string }) {
  return (
    <div
      className="bg-black bg-opacity-10 bg-blend-color bg-fixed bg-cover"
      style={{
        backgroundImage: 'url("/home-pabble-background.jpg")',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative isolate mx-auto py-8 text-center">
        <h1 className="text-4xl font-bold tracking-wide text-white sm:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  )
}
