import Image from 'next/image'

export default async function NotFound() {
  return (
    <div className="bg-white">
      {/* <PageImageBgTitle title={"404 NOT FOUND"} /> */}
      <div className="flex justify-center py-10">
        <Image src="/svg/4041.svg" alt="404" width="400" height="400" />
      </div>
      <div className="container mx-auto pb-10 px-4 text-center">
        <p className="mb-10 text-2xl font-bold">
          The page you are looking for is not found
        </p>
        <a
          href="/"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back to home page
        </a>
      </div>
    </div>
  )
}
