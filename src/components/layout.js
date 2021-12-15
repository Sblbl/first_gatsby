import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container } from './layout.module.scss'

const Layout = ({pageTitle, children}) => {
	const data = useStaticQuery( graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`)
	return (
		<div>
			<title> { pageTitle } | { data.site.siteMetadata.title } </title>
			<header> { data.site.siteMetadata.title } </header>
			<nav>
				<ul>
					<li><Link to='/'>home</Link></li>
					<li><Link to='/stuff'>stuff</Link></li>
					<li><Link to='/blog'>blog</Link></li>
				</ul>
			</nav>
			<main className={container}>
				<h1>{ pageTitle }</h1>
				{ children }
			</main>
		</div>
	)
}

export default Layout