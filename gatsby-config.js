const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
	siteMetadata: {
		title: `Master Supreme Clean`,
		description: `Master Supreme Clean`,
		author: `ShuaybCodes`,
	},
	plugins: [
		`gatsby-plugin-smoothscroll`,
		`gatsby-plugin-eslint`,
		`gatsby-plugin-react-helmet`,

	

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
