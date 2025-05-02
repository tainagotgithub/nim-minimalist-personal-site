type Project = {
  name: string
  description: string
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
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

export const PROJECTS: Project[] = [
  {
    name: 'xxxxxx',
    description:
      'x',
    link: 'xx',
    id: 'project1',
  }
]

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
