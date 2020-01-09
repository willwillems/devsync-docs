module.exports = {
  title: 'Devsync Documentation',
  description: 'Documentation for Devsync.',
  dest: 'dist',
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