import { PrimaryButton } from '@/components/buttons'
import ContactUsModal from '@/components/contactUsModal'
import Image from 'next/image'

export default async function ContactUs() {
  const contactInfo: { [key: string]: string[] } = {
    mobile: [`${process.env.NEXT_PUBLIC_CONTACT_PHONE}`, '/mobile.png'],
    email: [`${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`, '/gmail.png'],
    whatsapp: [`${process.env.NEXT_PUBLIC_CONTACT_WHATSAPP}`, '/whatsapp.png'],
  }

  return (
    <section className="bg-white text-pretty">
      <div className="conatiner mx-auto grid grid-cols-1 md:grid-cols-2 px-4 justify-between items-center">
        <div className="flex justify-center items-center">
          <Image
            src={'/svg/contactus1.svg'}
            alt={''}
            width="500"
            height="100"
            draggable={false}
          />
        </div>
        <div className="">
          <div className="text-indigo-400 text-center md:text-left">
            - CONTACT US -
          </div>
          <div className="my-5 text-2xl text-center md:text-left">
            {process.env.NEXT_PUBLIC_COMPANY_NAME}
          </div>
          <ul>
            {Object.keys(contactInfo).map(function (keyName, keyIndex) {
              return (
                <a
                  key={`contact-us-contact-info-${keyIndex}`}
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                  className="hover:underline text-md flex flex-row items-center my-4"
                >
                  <span className="ml-5 text-indigo-700">
                    {keyName}: {contactInfo[keyName][0]}
                  </span>
                </a>
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