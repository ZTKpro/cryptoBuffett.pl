module.exports = {
  siteMetadata: {
    title: `Crypto Buffet`,
    description: `Jesteśmy średniej wielkości zjednoczeniem specjalistów z szeroko pojętych dziedzin - online marketingu, programów partnerskich i afiliacyjnych. Pomagamy zaprzyjaźnionym firmom wdrążać promocje marketingowe i sprawować nad nimi opiekę i kontrolę.`,
    author: `DS website`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crypto Buffet`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`,
      },
    }, {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "promoction",
        fieldName: "promoction",
        url: "https://api-euwest.graphcms.com/v1/ck622337z6rsx01939stpax81/master",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
