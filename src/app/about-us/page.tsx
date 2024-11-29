import { PrimaryButton } from '@/components/buttons'
import ContactUsModal from '@/components/contactUsModal'
import Image from 'next/image'

export default async function AboutUs() {
  const whatWeOffer: { [key: string]: string } = {
    'Web Development':
      'From simple landing pages to complex e-commerce platforms, we build websites that are not only visually appealing but also user-friendly and optimized for performance.',
    'App Development':
      'Whether you need a native iOS or Android app, or a cross-platform solution, we have the expertise to create innovative and engaging mobile experiences.',
    'Backend Development':
      'Our team specializes in building robust and scalable backend infrastructure, ensuring your applications perform seamlessly and securely.',
    'Technical Consultation':
      'Need expert advice on your technology stack, project roadmap, or IT strategy? Our consultants are here to guide you every step of the way.',
  }

  return (
    <section className="bg-white text-pretty">
      <div className="conatiner mx-auto grid grid-cols-1 md:grid-cols-2 px-4 justify-between items-center">
        <div className="flex justify-center items-center">
          <Image
            src={'/svg/aboutus1.svg'}
            alt={''}
            width="500"
            height="100"
            draggable={false}
          />
        </div>
        <div className="">
          <div className="text-indigo-400 text-center md:text-left">
            - ABOUT US -
          </div>
          <div className="my-5 text-2xl text-center md:text-left">
            Your Tech Partner
          </div>
          <p>
            At {process.env.NEXT_PUBLIC_COMPANY_NAME}, we are passionate about
            turning ideas into reality. With over a decade of experience in the
            software engineering industry, our team of skilled professionals is
            dedicated to providing comprehensive technical solutions tailored to
            your unique needs.
          </p>
          <p className="font-bold mt-5 mb-3">What We Offer:</p>
          <ul>
            {Object.keys(whatWeOffer).map(function (keyName, keyIndex) {
              return (
                <li
                  key={`about-us-what-we-offer-${keyIndex}`}
                  className="marker:text-indigo-400 list-disc ml-5 mb-3"
                >
                  <b className="text-indigo-400">{keyName}:</b>{' '}
                  {whatWeOffer[keyName]}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-center h-32 animate-bounce">
        <ContactUsModal>
          <PrimaryButton content={'Get in Touch Now!'} url={''}></PrimaryButton>
        </ContactUsModal>
      </div>
    </section>
  )
}
