import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Coili's Notebook",
  description: "Not cheat, just help!",
  base: '/',
  themeConfig: {
    
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Documentation', link: '/ad/test.html' }
    ],

    sidebar: [
      {
        text: 'Active Directory',
        items: [
          { text: 'Test', link: '/ad/test.md' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coili' }
    ]
  }
})
