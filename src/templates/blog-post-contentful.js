import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostContentfulTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.description || post.subtitle}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.date}
          </p>
        </header>
        <section>{documentToReactComponents(post.childContentfulPostContentRichTextNode.json)}</section>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={"../" + previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={"../" + next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query BlogPostContentfulBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
      }
    }
    contentfulPost( slug: { eq: $slug }) {
      title
      subtitle
      author
      date
      #TODO Invalid query / changes in rich-text-react-renderer?
      childContentfulPostContentRichTextNode {
        json
      }
    }
  }
`
