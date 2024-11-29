'use client'

import { FaHtml5, FaAppStoreIos } from 'react-icons/fa'
import { SiKubernetes } from 'react-icons/si'
import { MdSupportAgent } from 'react-icons/md'
import { IoIosArrowUp } from 'react-icons/io'
import { useState } from 'react'
import Image from 'next/image'

export default function HomeOurAdvantages() {
  const [displayContentIndex, setDisplayContentIndex] = useState(-1)
  const contentList = [
    {
      title: 'Expertise and Experience',
      icon: FaHtml5,
      content:
        'We have a history of successfully addressing complex technical challenges and delivering results.',
    },
    {
      title: 'Tailored Solutions',
      icon: FaAppStoreIos,
      content:
        'We believe in understanding your unique needs and providing solutions that align with your specific goals. Our consultants are skilled at identifying root causes and implementing effective solutions.',
    },
    {
      title: 'Customer Satisfaction',
      icon: SiKubernetes,
      content:
        'We prioritize building strong relationships with our clients, ensuring their satisfaction is always our top priority. ',
    },
    {
      title: 'Results-Oriented Approach',
      icon: MdSupportAgent,
      content:
        'We strive to exceed your expectations and continuously improve our services.',
    },
  ]

  const onFaqTap = function (index: number) {
    console.log('onFaqTap')
    setDisplayContentIndex(displayContentIndex == index ? -1 : index)
  }
  return (
    <section className="bg-white text-center text-pretty">
      <div className="conatiner mx-auto grid grid-cols-1 md:grid-cols-2 px-4 justify-between items-center">
        <div className="flex justify-center items-center">
          <Image
            src={'/svg/home2.svg'}
            alt={''}
            width="500"
            height="100"
            draggable={false}
          />
        </div>
        <div className="">
          <div className="text-indigo-400 text-center md:text-left">
            - OUR ADVANTAGES -
          </div>
          <div className="my-5 text-2xl text-center md:text-left">
            Dedicated experts to assist our clients
          </div>
          {contentList.map((item, index) => (
            <div key={`why-choose-us-${index}`} className="relative last:mb-0">
              <div className="relative">
                <div className="absolute left-0 top-1.5">
                  <IoIosArrowUp
                    className={`transition ${
                      displayContentIndex == index ? 'rotate-0' : 'rotate-180'
                    }`}
                  />
                </div>
                <div className="text-lg text-left text-indigo-700 pl-7 my-3 cursor-pointer">
                  <span
                    className="absolute inset-0"
                    onClick={() => onFaqTap(index)}
                  />
                  {item.title}
                </div>
              </div>
              <div
                className={`transition-height text-left pl-7 overflow-hidden ${
                  displayContentIndex == index ? 'h-24' : 'h-0'
                }`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
