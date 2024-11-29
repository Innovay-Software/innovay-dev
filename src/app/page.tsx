import { PrimaryButton } from '@/components/buttons'
import HomeHero from '@/components/homeHero'
import HomeServices from '@/components/homeServices'
import PortfolioGrid from '@/components/portfolioGrid'
import HomeOurAdvantages from '@/components/homeOurAdvantages'

export default function Home() {
  return (
    <div className="bg-white">
      <HomeHero />
      <div className="py-10">
        <HomeServices />
      </div>
      <div className="py-10 md:py-32">
        <HomeOurAdvantages />
      </div>
      {/* <div className="py-10">
        <HomeSolutions />
      </div> */}
      <div className="py-10">
        <PortfolioGrid showingLength={4} />
        <div className="flex items-center justify-center mt-10">
          <PrimaryButton content={'More Projects'} url={'/portfolio'} />
        </div>
      </div>
    </div>
  )
}
