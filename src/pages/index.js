import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import Jumbo from '../components/Jumbo'
import Products from '../components/Products'

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }  
    }
    allStripePrice {
      edges {
        node {
          product {
            name
            metadata {
              wear
              img
              description
            }
          }
          price: unit_amount
          id
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title='Home' />
      <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
      <Products products={data.allStripePrice.edges} />
    </>
  )
}

export default IndexPage
