# 0xreeko
<hr>
<!-- (note to self: include revamp brand banner here) -->

## Tools Used
- **Framework**: [Next.js](https://nextjs.org/) w/ Typescript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [RuskelUI](https://github.com/0xreeko/ruskelui), [GSAP 3](https://greensock.com/docs/) 
- **Content**: [Notion API](https://developers.notion.com)
- **Deployment**: [Vercel](https://vercel.com)

## Overview
- `@types`: contains types.
- `components/*`: contains components and icons used throughout my portfolio.
- `controller/notionController`: contains async methods for fetch *ReekoPosts* from Notion
- `pages/blog`: displays all *ReekoPosts* 
- `pages/blog/[slug]`: displays *ReekoPost* depending on the slug
- `pages/tags[slug]`: displays all *ReekoPosts* containing the selected tag  
- `pages/*`: contains all other static pages   
- `public/*`: contains relevant media for my portfolio
- `styles/*`: contains all styles and layouts that apply to pages in my portfolio
- `utils/*`: contains utils that are used in more than one place 