import { PortfolioItemInterface } from './portfolioItem'

export interface UserDataInterface {
  portfolioData: { [key: string]: PortfolioItemInterface }
}
