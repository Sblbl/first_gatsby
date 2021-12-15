module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'Gatsby Frankenstein',
	},
	plugins: [
		'gatsby-plugin-sass', 
		'gatsby-plugin-image',
    	'gatsby-plugin-sharp', 
    	'gatsby-plugin-mdx',
    	{
    		resolve: `gatsby-plugin-google-fonts`, 
    		options: {
    			fonts: [
    				`IBM Plex Sans\:300,700`
    			],
    			display: 'swap'
    		} 
    	}, 
    	 {
			resolve: "gatsby-source-filesystem",
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			} 
		},
	],
};
