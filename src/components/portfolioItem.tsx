'use client'

import 'react-image-gallery/styles/css/image-gallery.css'
import { PortfolioItemInterface } from '@/services/interfaces/portfolioItem'
import Image from 'next/image'
import PortfolioItemFullDisplay from './portfolioItemFullDisplay'

export default function PortfolioItem({
  portfolio,
}: {
  portfolio: PortfolioItemInterface
}) {
  return (
    <PortfolioItemFullDisplay photos={portfolio.photos}>
      <div className="relative ring-2 ring-indigo shadow-lg shadow-indigo-300 p-5 pb-10 rounded-lg md:ring-0">
        <div className="overflow-hidden rounded-lg shadow-md shadow-gray-300">
          <Image
            className="aspect-video w-full object-cover object-center"
            src={portfolio.photos[0].thumbnail}
            alt={''}
            objectFit={'contain'}
            width="500"
            height="100"
          />
        </div>
        <div>
          <h3 className="mt-3 text-md font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a>
              <span className="absolute inset-0"></span>
              {portfolio.metadata.title}
            </a>
          </h3>
          <div className="flex flex-wrap gap-4 mt-2">
            {portfolio.metadata.tags.map((item) => (
              <div
                key={`portfolio-item-${portfolio.metadata.title}-${item}`}
                className="px-5 py-1 text-sm rounded-full bg-indigo-400 text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortfolioItemFullDisplay>
  )
}
