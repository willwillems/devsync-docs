module.exports = {
  title: 'Devsync Documentation',
  description: 'Documentation for Devsync.',
  dest: 'dist',
  themeConfig: {
    logo: '/logo.png',
    sidebar: 'auto',
    nav: [
      { text: 'Quickstart', link: '/quickstart' },
      { text: 'Troubleshooting', link: '/troubleshooting' },
      { text: 'Contact', link: 'mailto:will@devsync.co' },
      { text: 'Devsync', link: 'https://devsync.co' }
    ],
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-html5-embed'), {
        html5embed: {
          useImageSyntax: true,
          attributes: {
            'audio': 'autoplay loop muted style="width: 480px; border-radius: 5px;"',
            'video': 'autoplay loop muted style="width: 480px; border-radius: 5px;"'
          }
        },
      })
    }
  }
}