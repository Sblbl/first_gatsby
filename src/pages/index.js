import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

/*const descriptionStyle = {
	color: "#232129",
	fontSize: 14,
	marginTop: 10,
	marginBottom: 0,
	lineHeight: 1.25,
}

const docLink = {
	text: "Documentation",
	url: "https://www.gatsbyjs.com/docs/",
	color: "#8954A8",
}

// data
const links = [
	{
		text: "Tutorial",
		url: "https://www.gatsbyjs.com/docs/tutorial/",
		description:
			"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
		color: "#E95800",
	},
	{
		text: "How to Guides",
		url: "https://www.gatsbyjs.com/docs/how-to/",
		description:
			"Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
		color: "#1099A8",
	}
]*/

// markup
const IndexPage = () => {
	return (
		<Layout pageTitle='Home'>
			<p>Helloo</p>
			<StaticImage
				alt="Me"
				src="https://instagram.fblq1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/158789612_248408373592613_3685286132517564528_n.jpg?_nc_ht=instagram.fblq1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=PcqnY6BSx3YAX_boQIv&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-3mYoKeV8KIveuK0CahflLQCZ43p06elPPPSWzuklstw&oe=61C06187&_nc_sid=7bff83"
			/>
		</Layout>
	)
}

export default IndexPage
