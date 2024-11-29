import { PortfolioItemInterface } from './services/interfaces/portfolioItem'

type GlobalConfig = {
  company: string
  companyUrl: string
  domain: string
  version: string
  contact: {
    email: string
    phone: string
    skype: string
  }
  portfolioData: { [key: string]: PortfolioItemInterface }
}

const dirPath = '/portfolio/'

const config1: GlobalConfig = {
  company: process.env.NEXT_PUBLIC_COMPANY_NAME ?? '',
  companyUrl: process.env.NEXT_PUBLIC_COMPANY_URL ?? '',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN ?? '',
  version: process.env.NEXT_PUBLIC_APP_VERSION ?? '',
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '',
    skype: process.env.NEXT_PUBLIC_CONTACT_SKYPE ?? '',
  },
  portfolioData: {
    dng: {
      metadata: {
        title: 'Construction Company Website',
        tags: ['website', 'cloud'],
      },
      photos: [
        {
          original: dirPath + 'dng-web1.jpg',
          thumbnail: dirPath + 'dng-web1.jpg',
          description: '',
        },
        {
          original: dirPath + 'dng-web2.jpg',
          thumbnail: dirPath + 'dng-web2.jpg',
          description: '',
        },
        {
          original: dirPath + 'dng-web3.jpg',
          thumbnail: dirPath + 'dng-web3.jpg',
          description: '',
        },
      ],
    },
    yzj: {
      metadata: {
        title: 'Construction Material Trading App',
        tags: ['iOS', 'Android', 'cloud'],
      },
      photos: [
        {
          original: dirPath + 'yzj-1.jpg',
          thumbnail: dirPath + 'yzj-1.jpg',
          description: 'Home page',
        },
        {
          original: dirPath + 'yzj-2.jpg',
          thumbnail: dirPath + 'yzj-2.jpg',
          description: 'Resources page',
        },
        {
          original: dirPath + 'yzj-3.png',
          thumbnail: dirPath + 'yzj-3.png',
          description: 'Online chat page',
        },
        {
          original: dirPath + 'yzj-4.jpg',
          thumbnail: dirPath + 'yzj-4.jpg',
          description: 'Resources post page',
        },
        {
          original: dirPath + 'yzj-5.png',
          thumbnail: dirPath + 'yzj-5.png',
          description: 'Personal page',
        },
        {
          original: dirPath + 'yzj-6.jpg',
          thumbnail: dirPath + 'yzj-6.jpg',
          description: 'Forum page',
        },
        {
          original: dirPath + 'yzj-7.jpg',
          thumbnail: dirPath + 'yzj-7.jpg',
          description: '1 on 1 chat page',
        },
        {
          original: dirPath + 'yzj-8.png',
          thumbnail: dirPath + 'yzj-8.png',
          description: 'Collaborative contract form writing page',
        },
        {
          original: dirPath + 'yzj-9.png',
          thumbnail: dirPath + 'yzj-9.png',
          description: 'Rental contract management page',
        },
      ],
    },
    yzjweb: {
      metadata: {
        title: 'Construction Company Website',
        tags: ['website', 'cloud'],
      },
      photos: [
        {
          original: dirPath + 'yzj-web1.jpg',
          thumbnail: dirPath + 'yzj-web1.jpg',
          description: '',
        },
        {
          original: dirPath + 'yzj-web2.jpg',
          thumbnail: dirPath + 'yzj-web2.jpg',
          description: '',
        },
      ],
    },
    sxy: {
      metadata: {
        title: 'Online Learning App',
        tags: ['iOS', 'Android', 'cloud'],
      },
      photos: [
        {
          original: dirPath + 'sxy-1.jpg',
          thumbnail: dirPath + 'sxy-1.jpg',
          description: 'Home page',
        },
        {
          original: dirPath + 'sxy-2.jpg',
          thumbnail: dirPath + 'sxy-2.jpg',
          description: 'Course title page',
        },
        {
          original: dirPath + 'sxy-3.jpg',
          thumbnail: dirPath + 'sxy-3.jpg',
          description: 'Course content page',
        },
        {
          original: dirPath + 'sxy-4.jpg',
          thumbnail: dirPath + 'sxy-4.jpg',
          description: 'Learning stats page',
        },
        {
          original: dirPath + 'sxy-5.jpg',
          thumbnail: dirPath + 'sxy-5.jpg',
          description: 'Learning center page',
        },
        {
          original: dirPath + 'sxy-6.jpg',
          thumbnail: dirPath + 'sxy-6.jpg',
          description: 'Personal page',
        },
      ],
    },
    innovayapp: {
      metadata: {
        title: 'Innovay Online Tools',
        tags: ['website', 'cloud'],
      },
      photos: [
        {
          original: dirPath + 'innovayapp-1.jpg',
          thumbnail: dirPath + 'innovayapp-1.jpg',
          description: '',
        },
        {
          original: dirPath + 'innovayapp-2.jpg',
          thumbnail: dirPath + 'innovayapp-1.jpg',
          description: '',
        },
        {
          original: dirPath + 'innovayapp-3.jpg',
          thumbnail: dirPath + 'innovayapp-1.jpg',
          description: '',
        },
      ],
    },
    other: {
      metadata: {
        title: 'Other Various Projects',
        tags: ['website', 'iOS', 'Android', 'cloud'],
      },
      photos: [
        {
          original: dirPath + 'other1-1.jpg',
          thumbnail: dirPath + 'other1-1.jpg',
          description: 'Restaurant Ordering App',
        },
        {
          original: dirPath + 'other1-2.jpg',
          thumbnail: dirPath + 'other1-2.jpg',
          description: 'Restaurant Ordering App',
        },
        {
          original: dirPath + 'other1-3.jpg',
          thumbnail: dirPath + 'other1-3.jpg',
          description: 'Restaurant Ordering App',
        },
        {
          original: dirPath + 'other1-4.jpg',
          thumbnail: dirPath + 'other1-4.jpg',
          description: 'Restaurant Ordering App',
        },
        {
          original: dirPath + 'other1-5.jpg',
          thumbnail: dirPath + 'other1-5.jpg',
          description: 'Restaurant Ordering App',
        },
      ],
    },
  },
}

export default config1 satisfies GlobalConfig as GlobalConfig
