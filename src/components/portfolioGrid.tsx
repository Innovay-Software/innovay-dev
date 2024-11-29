'use client'
import 'react-image-gallery/styles/css/image-gallery.css'
import { PortfolioItemInterface } from '@/services/interfaces/portfolioItem'
import PortfolioItem from './portfolioItem'
import config1 from '@/config'

export default function PortfolioGrid({
  showingLength,
}: {
  showingLength: number
}) {
  const oldPortfolioData: { [key: string]: PortfolioItemInterface } =
    config1.portfolioData
  const keys = Object.keys(oldPortfolioData)
  let newPortfolioData: PortfolioItemInterface[] = []
  for (let i = 0; i < showingLength; i++) {
    if (i >= keys.length) {
      break
    }
    newPortfolioData.push(oldPortfolioData[keys[i]])
  }

  return (
    <section className="container mx-auto px-4">
      <div className=" text-indigo-400 text-center">- PORTFOLIO -</div>
      <div className="my-5 text-2xl text-center">
        Guaranteed Customer Satisfaction
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {newPortfolioData.map((portfolio) => {
          return (
            <div key={`portfolio-item-${portfolio.metadata.title}`}>
              <PortfolioItem portfolio={portfolio} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
