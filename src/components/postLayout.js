import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from './layout'

// IMPORTANT: Scott got this wrong. This should be a page called post. Not a component!

class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data

    return (
      <Layout location={this.props.location}>
        <h1>{markdownRemark.frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    )
  }
}

export default postLayout
export const query = graphql`
  query SINGLE_POST_QUERY($slug: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`