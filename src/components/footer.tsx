'use client'

import Image from 'next/image'
import Logo from './svg/logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-700 pb-32">
      <div className="h-px w-full bg-gray-200 mb-16" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-10 lg:flex md:flex-row justify-between text-left">
          <div className="col-span-2 md:w-96">
            <a href="/" className="text-xl content-center font-bold">
              {process.env.NEXT_PUBLIC_COMPANY_NAME}
            </a>
            {/* <a href="/" className="ml-11 text-md">
              {process.env.NEXT_PUBLIC_COMPANY_SLOGAN}
            </a> */}

            <div className="flex flex-row gap-x-4 mt-5">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="hover:underline text-md"
              >
                <Image src={'/gmail.png'} alt={''} width="40" height="40" />
              </a>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                className="hover:underline text-md"
              >
                <Image src={'/mobile.png'} alt={''} width="40" height="40" />
              </a>
              <a
                href={`${process.env.NEXT_PUBLIC_CONTACT_WHATSAPP}`}
                className="hover:underline text-md"
                target="_blank"
              >
                <Image src={'/whatsapp.png'} alt={''} width="40" height="40" />
              </a>
            </div>
            <p className="text-md text-gray-500 mt-5">
              &copy; {year} {process.env.NEXT_PUBLIC_COMPANY_NAME} <br /> All
              rights reserved
            </p>
            {/* <div className="flex mt-8 gap-3 justify-left overflow-x-auto">
              <SocialIcon url="https://twitter.com" />
              <SocialIcon url="https://xiaohongshu.com" />
              <SocialIcon url="https://facebook.com" />
              <SocialIcon url="https://instagram.com" />
              <SocialIcon url="https://youtube.com" />
            </div> */}
          </div>
          <div className="">
            <h3 className="text-lg font-bold">Our Works</h3>
            <ul>
              <li>
                <a href="/portfolio" className="hover:underline text-md">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:underline text-md">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul>
              <li>
                <a href="/about-us" className="hover:underline text-md">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:underline text-md">
                  Contact Us
                </a>
              </li>
              {/* <li>
                <a href="/faq" className="hover:underline text-md">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline text-md">
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 px-4 flex justify-end text-xs text-gray-200">
        <a
          href="https://iconscout.com/illustrations/website-loading-speed"
          target="_blank"
        >
          website loading speed
        </a>
        &nbsp;by&nbsp;
        <a
          href="https://iconscout.com/contributors/woobrodesign"
          target="_blank"
        >
          WOOBRO LTD
        </a>
      </div>
    </footer>
  )
}
