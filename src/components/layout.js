import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.scss'

const Layout = ({pageTitle, children}) => {
	return (
		<div>
			<title>pageTitle</title>
			<nav>
				<ul>
					<li><Link to='/'>home</Link></li>
					<li><Link to='/stuff'>stuff</Link></li>
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