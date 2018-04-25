module.exports = {
  siteMetadata: {
    url: 'https://lumen.netlify.com',
    title: 'DAB Gatsby Boilerplate',
    subtitle: 'This is the DAB Gatsby Boilerplate Description',
    disqusShortname: '',
    menu: [
      {
        label: 'Articles',
        path: '/'
      },
      {
        label: 'About me',
        path: '/about/'
      },
      {
        label: 'Contact me',
        path: '/contact/'
      },
      {
        label: 'CMS',
        path: '/cms/'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `marzl`,
        // accessToken: `MC5XdC1obUNjQUFMVU5IeGFG.77-9dyzvv73vv73vv70X77-977-9HXtvD27vv71qNE5a77-977-977-9fCrvv73vv73vv73vv73vv73vv73vv71Q`,
        accessToken: `MTUyNDY3NDE2OTYzNC5XdUNiUXljQUFMWU5JMFVx.77-9RRPvv73vv73vv73vv73vv70Iczt277-977-977-977-9Ge-_vSLvv73vv71577-977-9YyTvv70Ubnnvv73vv70`,
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
            {
              site {
                siteMetadata {
                  url
                }
              }
              allSitePage(
                filter: {
                  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                }
              ) {
                edges {
                  node {
                    path
                  }
                }
              }
          }`,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            return {
              url: site.siteMetadata.url + edge.node.path,
              changefreq: 'daily',
              priority: 0.7
            };
          })
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss-sass'
  ]
};
