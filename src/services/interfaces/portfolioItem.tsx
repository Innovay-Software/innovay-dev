interface portfolioMetadataInterface {
  title: string
  tags: string[]
}

export interface PortfolioItemInterface {
  metadata: portfolioMetadataInterface
  photos: portfolioPhotoInterface[]
}
