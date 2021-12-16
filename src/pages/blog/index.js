import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle='Blog'>
			{
				data.allMdx.nodes.map((node) => (
					<article key={node.id}>
						<Link to={`/blog/${node.slug}`}>
							{ node.frontmatter.title }
						</Link>
						<p>
							Posted: { node.frontmatter.date }
						</p>
					</article>
				))
			}
		</Layout>
	)
}

export const query = graphql`
	{
		allMdx(sort: {fields: frontmatter___date, order: DESC}) {
			nodes {
				frontmatter {
					title
					date
				}
				id
				slug
			}
		}
	}
`

export default BlogPage