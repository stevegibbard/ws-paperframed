module.exports = {
  siteMetadata: {
    title: "PaperFramed",
    description: "Steve Gibbard Portfolio Site for Pring, Papercraft and Photography",
    author: "Steve Gibbard"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};