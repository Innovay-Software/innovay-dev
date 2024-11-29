import PortfolioGrid from '@/components/portfolioGrid'

export default function Portfolio() {
  return (
    <div className="bg-white">
      <div className="py-10">
        <PortfolioGrid showingLength={1000} />
      </div>
    </div>
  )
}
