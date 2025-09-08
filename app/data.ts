type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type Certifications = { 
  company: string
  title: string
  dateIssued: string
  link: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'EBANX',
    title: 'mid level cloud analyst',
    start: 'dez/2024',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'Paraná Banco',
    title: 'devops engineer, from intern to mid level',
    start: 'jun/2021',
    end: 'nov/2024',
    id: 'work2',
  },
]

export const CERTIFICATIONS: Certifications [] = [
  { 
    company: 'AWS',
    title: 'aws solutions architect associate',
    dateIssued: 'sep/06, 2025 - sep/06, 2028',
    link: 'https://www.credly.com/badges/fcd37821-3a19-483e-a981-9ee3ad265061'
  },
  {
    company: 'AWS',
    title: 'aws cloud pratictioner',
    dateIssued: 'oct/25, 2024 - sep/06, 2028',
    link: 'https://www.credly.com/badges/e343268b-baec-48c1-aa56-802f64b4d050',
  },
  { 
    company: 'azure',
    title: 'AZ-104',
    dateIssued: 'janurary 15, 2022',
    link: 'https://www.credly.com/badges/42889918-8b2a-4513-9a94-1514f4192d04', 
   }
]
export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'aws project',
    description: 'xx',
    link: '/blog/aws',
    uid: 'blog-1',
  },
  {
    title: 'kubernetes and azure',
    description: 'xx',
    link: '/blog/k8',
    uid: 'blog-2'
  },
  {
    title: 'backstage poc',
    description: 'xx',
    link: '/blog/backstage',
    uid: 'blog-3'
  }
//  {
//    title: 'Why I left my job to start my own company',
//    description:
//      'A deep dive into my decision to leave my job and start my own company',
//    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//    uid: 'blog-2',
//  },
//  {
//    title: 'What I learned from my first year of freelancing',
//    description:
//      'A look back at my first year of freelancing and what I learned',
//    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//    uid: 'blog-3',
//  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/tainagotgithub',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/taina-bedim-puja',
  },
]

export const EMAIL = 'bedtaina@gmail.com'
