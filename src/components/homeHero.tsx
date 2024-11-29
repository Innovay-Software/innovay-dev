'use client'

import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { WhiteButton } from './buttons'
import ContactUsModal from './contactUsModal'

export default function HomeHero() {
  const keywords = ['Innovative', 'Imaginative', 'Tech-Savvy']
  return (
    <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center h-[750px] lg:h-[500px]">
      <div className="container grid grid-cols-1 mx-auto justify-between p-4 lg:grid-cols-2">
        <div className="text-white mt-24 md:mt-12 lg:mt-32">
          <div className="flex flex-col flex-wrap overflow-visible gap-5 items-center">
            <div className="font-bold text-3xl md:text-4xl lg:text-5xl uppercase lg:normal-case">
              {process.env.NEXT_PUBLIC_COMPANY_NAME}
            </div>
            <Typewriter
              options={{
                strings: keywords,
                autoStart: true,
                loop: true,
                skipAddStyles: true,
                wrapperClassName:
                  'text-center lg:text-left font-bold text-3xl lg:text-4xl',
                cursorClassName: 'text-3xl lg:text-4xl',
              }}
            />
          </div>
          <div className="my-8 text-white text-lg lg:text-2xl text-center">
            {process.env.NEXT_PUBLIC_COMPANY_SLOGAN2}
          </div>
          <div className="text-center my-10">
            <ContactUsModal>
              <WhiteButton content={'Contact Us Now'} url={''} />
            </ContactUsModal>
          </div>
          {/* <div className="flex">
            <div className="text-white text-lg mr-1">Developing</div>
          </div> */}
        </div>
        <div className="flex justify-center items-center mt-10 lg:mt-12">
          <Image
            src={'/svg/home1.svg'}
            alt={''}
            width="500"
            height="100"
            draggable={false}
          />
        </div>
      </div>
    </section>
  )
}
