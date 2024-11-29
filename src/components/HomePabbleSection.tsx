'use client'

const HomePabbleSection = () => {
  return (
    <section
      className={"bg-[url('/home-pabble-background.jpg')] bg-cover bg-center"}
    >
      <div className="mx-auto py-32 max-w-screen-lg h-full text-white">
        {/* <div className="mb-2 text-xl">“If we want users to like our software, we should design it to behave like a likable person.”</div>
                <div className='flex justify-end'>
                    <div className='text-xl mr-1'>– Alan Cooper</div>
                </div>
                <div className="mt-16 mb-2 text-xl">“Design is intelligence made visible.”</div>
                <div className='flex justify-end'>
                    <div className='text-xl mr-1'>– Alina Wheeler</div>
                </div> */}
        {/* <div className='mt-16'></div> */}
        <div className="mb-2 text-xl">
          “The best way to predict the future is to invent it.”{' '}
        </div>
        <div className="flex justify-end">
          <div className="text-xl mr-1">- Alan Kay</div>
        </div>
      </div>
    </section>
  )
}

export default HomePabbleSection
