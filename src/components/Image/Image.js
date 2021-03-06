import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => {
  const { icon } = useStaticQuery(graphql`
    query GET_IMAGE {
      icon: file(relativePath: {eq: "icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }

  `)

  return (
    <Img fluid={icon.childImageSharp.fluid} />
  )
}

export default Image
