// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Tribe Works",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        config: "./tailwind.js"
      }
    }
  ]

  // default extractor - currently has problems TODO:
  /* class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-z0-9-:\/]+/g) || []
    }
  }
  */
};
