// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        config: "./tailwind.js"
      }
    },
    {
      use: 'gridsome-plugin-purgecss',
    // default options, the following will be included if you don't provide anything
    options: {
      content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.md'
        ],
        extractor: TailwindExtractor,
        extensions: ['vue', 'js', 'jsx', 'md']
    }
    }
  ]

    // default extractor
  class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-z0-9-:\/]+/g) || []
    }
  }

};
