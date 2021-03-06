module.exports = {
    siteMetadata: {
        title: `Blog de Programación`,
        description: `Blog sobre programación sobre desarrollo de aplicaciones`,
        author: `@lizardojara`,
    },
    plugins: [
        `gatsby-plugin-sass`,
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
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: `https://blog-strapi-1.herokuapp.com`,
                queryLimit: 1000, // Default to 100
                contentTypes: [`post`],
                loginData: {
                    identifier: "1000juegosfriv",
                    password: "Lizardo27",
                },
            },
        },
        // {
        //   resolve: `gatsby-plugin-manifest`,
        //   options: {
        //     name: `gatsby-starter-default`,
        //     short_name: `starter`,
        //     start_url: `/`,
        //     background_color: `#663399`,
        //     theme_color: `#663399`,
        //     display: `minimal-ui`,
        //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        //   },
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
