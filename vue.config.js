module.exports = {
  publicPath: `./`,
  outputDir: `./dist`,
  filenameHashing: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: './index.html',
      title: '优睿驰官网',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  }
}
