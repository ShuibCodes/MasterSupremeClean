const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
  })
  

module.exports = {
	siteMetadata: {
		title: `Master Supreme Cleans`,
		description: `Master Supreme Cleans`,
		author: `ShuaybCodes`,
	},
	plugins: [
		`gatsby-plugin-smoothscroll`,
		`gatsby-plugin-eslint`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

		{
			resolve: "gatsby-source-contentful",
	  
			options: {
			  spaceId: "4gjko0b88cli",
			  accessToken: "G9AkM_g6e2LNDxRauqqMh4rm6PxIgfOr7DyKcXa-wJA",
			},
		  },

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-tailwind`,
				short_name: `starter`,
				start_url: `/`,
				background_color: fullConfig.theme.colors.white,
				theme_color: fullConfig.theme.colors.green['500'],
				display: `minimal-ui`,
				icon: `src/images/MSC-logo.png`,
			},
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [
					require(`tailwindcss`)(tailwindConfig),
					require(`autoprefixer`),
					...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
				],
			},
		},
		`gatsby-plugin-offline`,
	],
};
