import { colorType } from "ruskelui/dist/utils"

type tags = 'Databases' | 'Auth2 & Encryption' | 'Reactjs' | 'Machine Learning & AI' | 'Testing' | 'Python' | 'Web3' | 'GraphQL' | 'Tailwind/CSS3/GSAP' | 'Nextjs' | 'Node & Express' | 'Typescript'

export const variant: { [key in string]: colorType } = {
    'Databases': 'green',
    'Auth2 & Encryption': 'cyan',
    'Reactjs': 'jasper',
    'Machine Learning & AI': 'kunzite',
    'Testing': 'orange',
    'Python': 'blue',
    'Web3': 'ruby',
    'GraphQL': 'fuchsia',
    'Tailwind/CSS3/GSAP': 'teal',
    'Nextjs': 'scarlet',
    'Node & Express': 'peridot',
    'Typescript': 'azure'
  }