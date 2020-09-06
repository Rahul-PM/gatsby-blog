import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
text-decoration: none;
`;

const BlogTitle = styled.h3`
  margin-bottom:20 px;
  color:blue;
`;

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Rahul's Thought</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query  {
  allMarkdownRemark(sort: {fields: frontmatter___date, order:  DESC}) {
    totalCount
    edges {
      node {
        id
        fileAbsolutePath
        excerpt
        html
        fields{
          slug
        }
        frontmatter {
          title
          date
          description
        }
      }
    }
  }
}
`;