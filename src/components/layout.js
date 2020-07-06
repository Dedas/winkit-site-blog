import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const config = require('../../src/data/config')

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © All rights are reserved | {new Date().getFullYear()} | Made by 
        {" "}
        <a href={"mailto:" + config.contact.email}>{config.author.name}</a>
        <br/>Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {`, `}
        <a href="https://www.contentful.com/">Contentful</a>
        {` and `}
        <a href="https://vercel.com/">Vercel</a>
      </footer>
    </div>
  )
}

export default Layout
