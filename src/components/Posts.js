import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const ALL_POSTS_QUERY = graphql`
  query ALL_POSTS_QUERY {
    allMarkdownRemark(
      limit: 5
      sort: {
        order: DESC,
        fields: [frontmatter___date]
      }
    ) {
      edges {
        node {
          html
          excerpt
          frontmatter{
            title
            date(formatString: "MMMM DD, YYYY") 
            slug
            
          }
        }
      }
    }
  }
`

const Posts = (props) => (
  <StaticQuery query={ALL_POSTS_QUERY}>
    {({allMarkdownRemark}) => 
      allMarkdownRemark.edges.map(({node}) => (
        <article key={node.frontmatter.slug}>
          <h1><Link to={`posts${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></h1>
          {node.frontmatter.date}
          <p>{node.excerpt}</p>
        </article>
      )
    )}
  </StaticQuery>
)

export default Posts